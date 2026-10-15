import type { AppStatus, StackGroupId } from '../data/shared';

export type Locale = 'en' | 'fr' | 'ar';

export const locales: Locale[] = ['en', 'fr', 'ar'];

export interface TimelineItem {
  role: string;
  org: string;
  when: string;
  where: string;
  desc: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  when: string;
  note: string;
}

export interface Dict {
  dir: 'ltr' | 'rtl';
  arrow: string;
  meta: { title: string; description: string };
  nav: { about: string; projects: string; apps: string; experience: string; certifications: string; skills: string; contact: string; menu: string; language: string };
  hero: { hello: string; available: string; name: string; role: string; tagline: string; seeProjects: string; downloadCv: string; photo: string };
  about: { title: string; body: string };
  activity: {
    title: string;
    onGithub: string;
    publicRepos: string;
    commitsYear: (year: number) => string;
    topLanguage: string;
    recent: (n: number) => string;
    gridLabel: string;
    months: string[];
  };
  projects: {
    title: string;
    count: (n: number) => string;
    builtWith: string;
    banner: (name: string) => string;
    code: string;
    status: { closed: string; play: string; client: string; soon: string };
    desc: Record<string, string>;
  };
  apps: { title: string; usage: string; status: Record<AppStatus, string>; tag: Record<string, string> };
  experience: { title: string; items: TimelineItem[] };
  education: { title: string; items: EducationItem[] };
  certs: { title: string; subtitle: string; verify: string; items: Record<string, { org: string; when: string }> };
  stack: { title: string; subtitle: string; count: (n: number) => string; groups: Record<StackGroupId, { name: string; hint: string }> };
  languages: { title: string; verify: string; items: Record<'ar' | 'fr' | 'en', { name: string; level: string }> };
  interests: { title: string; items: string[] };
  contact: {
    title: string;
    subtitle: string;
    emailMe: string;
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    message: string;
    messagePh: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    findMe: string;
    githubDetail: (repos: number) => string;
    linkedinDetail: string;
    playDetail: string;
    subject: string;
  };
  footer: string;
}
