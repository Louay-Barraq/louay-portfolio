// Banner settings per project. Screenshots go in src/assets/screenshots/<id>/
// (named 01.png, 02.png, … in display order). Run `npm run banners` to export.

export interface BannerConfig {
  accent: string;
  badge?: 'play' | 'closed';
  tech?: string[]; // defaults to the project's stack
  frame?: 'phone' | 'window'; // 'window' for web/desktop apps (2 shots, 16:10)
}

export const banners: Record<string, BannerConfig> = {
  converti: { accent: '#00DF7E', badge: 'play', tech: ['Flutter', 'Dart', 'Provider', 'REST API'] },
  diwenek: { accent: '#5C7CFA', tech: ['Flutter', 'Gemini AI', 'Firebase', 'Riverpod'] },
  'excellent-training': { accent: '#6366F1', frame: 'window', tech: ['React', 'Spring Boot', 'MySQL', 'Java'] },
  fixtura: { accent: '#D71212', tech: ['Flutter', 'Dart', 'SQLite', 'Provider'] },
  khetmti: { accent: '#00C853', tech: ['Flutter', 'Dart', 'Supabase', 'Riverpod'] },
  marketpulse: { accent: '#1D4ED8', tech: ['Flutter', 'Dart Frog', 'PostgreSQL', 'Redis'] },
  monoledger: { accent: '#14F195', tech: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL'] },
  mouzikti: { accent: '#14B8A6', frame: 'window', tech: ['Python', 'PLY', 'CustomTkinter', 'MIDI'] },
  smartqueue: { accent: '#0B50D5', tech: ['Flutter', 'Firebase', 'ESP32', 'Python'] },
  paycheck: { accent: '#14B89A', badge: 'play', tech: ['Flutter', 'Dart', 'Firebase', 'Firestore'] },
};
