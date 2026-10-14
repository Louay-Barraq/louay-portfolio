// Banner settings per project. Screenshots go in src/assets/screenshots/<id>/
// (named 01.png, 02.png, … in display order). Run `npm run banners` to export.

export interface BannerConfig {
  accent: string;
  badge?: 'play' | 'closed';
  tech?: string[]; // defaults to the project's stack
}

export const banners: Record<string, BannerConfig> = {
  converti: { accent: '#00DF7E', badge: 'play', tech: ['Flutter', 'Dart', 'Provider', 'REST API'] },
  paycheck: { accent: '#14B89A', badge: 'play', tech: ['Flutter', 'Dart', 'Firebase', 'Firestore'] },
};
