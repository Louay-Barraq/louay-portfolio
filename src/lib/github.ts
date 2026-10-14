// GitHub stats are fetched once at build time. Set GITHUB_TOKEN (a fine-grained,
// read-only token of your own account) so commit counts include private work.
// Without a token, or if the request fails, the snapshot below is used.

import { profile } from '../data/shared';

export interface Day {
  date: string;
  count: number;
  level: number; // 0..4
}

export interface GithubStats {
  publicRepos: number;
  commitsThisYear: number;
  year: number;
  topLanguage: string;
  recentCommits: number;
  days: Day[]; // last ~13 weeks, oldest first
}

// Snapshot taken on 2026-10-14.
const snapshotLevels = [0,0,0,0,1,0, 0,0,0,1,2,1,0, 0,0,0,0,0,0,0, 0,0,0,1,0,0,0, 0,0,1,1,0,0,0, 0,4,0,0,0,0,0, 0,0,0,0,0,4,2, 1,0,0,0,0,0,0, 1,0,1,0,0,0,0, 2,1,1,1,0,0,0, 0,0,0,0,0,0,1, 1,1,0,0,0,0,0, 3,1,2,0,2,0,0, 4,1,1,1];
const snapshotCounts = [0,0,0,0,7,0, 0,0,0,3,14,10,0, 0,0,0,0,0,0,0, 0,0,0,3,0,0,0, 0,0,2,2,0,0,0, 0,36,0,0,0,0,0, 0,0,0,0,0,40,11, 1,0,0,0,0,0,0, 5,0,1,0,0,0,0, 16,7,10,6,0,0,0, 0,0,0,0,0,0,1, 4,1,0,0,0,0,0, 21,9,13,0,13,0,0, 77,6,7,2];

const snapshot: GithubStats = {
  publicRepos: 24,
  commitsThisYear: 264,
  year: 2026,
  topLanguage: 'Dart',
  recentCommits: 173,
  days: snapshotLevels.map((level, i) => {
    const d = new Date(Date.UTC(2026, 6, 13 + i));
    return { date: d.toISOString().slice(0, 10), level, count: snapshotCounts[i] };
  }),
};

const LEVELS: Record<string, number> = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

const QUERY = `query($login: String!, $yearFrom: DateTime!, $recentFrom: DateTime!, $to: DateTime!) {
  user(login: $login) {
    repositories(privacy: PUBLIC, ownerAffiliations: OWNER, first: 100) {
      totalCount
      nodes { languages(first: 10) { edges { size node { name } } } }
    }
    year: contributionsCollection(from: $yearFrom, to: $to) { totalCommitContributions }
    recent: contributionsCollection(from: $recentFrom, to: $to) {
      totalCommitContributions
      contributionCalendar { weeks { contributionDays { date contributionCount contributionLevel } } }
    }
  }
}`;

async function fetchStats(token: string): Promise<GithubStats> {
  const now = new Date();
  const year = now.getUTCFullYear();
  const recentFrom = new Date(now.getTime() - 90 * 24 * 3600 * 1000);
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: QUERY,
      variables: {
        login: profile.githubLogin,
        yearFrom: new Date(Date.UTC(year, 0, 1)).toISOString(),
        recentFrom: recentFrom.toISOString(),
        to: now.toISOString(),
      },
    }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? res.status));
  const user = json.data.user;

  const bytes = new Map<string, number>();
  for (const repo of user.repositories.nodes) {
    for (const edge of repo.languages.edges) bytes.set(edge.node.name, (bytes.get(edge.node.name) ?? 0) + edge.size);
  }
  const topLanguage = [...bytes.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? snapshot.topLanguage;

  const days: Day[] = user.recent.contributionCalendar.weeks.flatMap((w: any) =>
    w.contributionDays.map((d: any) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] ?? 0 })),
  );

  return {
    publicRepos: user.repositories.totalCount,
    commitsThisYear: user.year.totalCommitContributions,
    year,
    topLanguage,
    recentCommits: user.recent.totalCommitContributions,
    days,
  };
}

let cached: Promise<GithubStats> | undefined;

export function getGithubStats(): Promise<GithubStats> {
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  if (!token) return Promise.resolve(snapshot);
  cached ??= fetchStats(token).catch((err) => {
    console.warn('[github] using snapshot, request failed:', err);
    return snapshot;
  });
  return cached;
}

// Group days into week columns (Sunday first) with empty cells padding the edges.
export function toWeeks(days: Day[]): (Day | null)[][] {
  if (days.length === 0) return [];
  const cells: (Day | null)[] = Array(new Date(days[0].date + 'T00:00:00Z').getUTCDay()).fill(null);
  cells.push(...days);
  while (cells.length % 7) cells.push(null);
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

// Month indexes (0-11) covered by the range, in order.
export function monthsCovered(days: Day[]): number[] {
  const seen: number[] = [];
  for (const d of days) {
    const m = Number(d.date.slice(5, 7)) - 1;
    if (seen[seen.length - 1] !== m) seen.push(m);
  }
  return seen;
}
