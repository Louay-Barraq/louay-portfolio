// Language-independent data: names, links, dates' order, tech stack, colors.
// Translated text lives in src/i18n/{en,fr,ar}.ts and is keyed by the ids below.

export const profile = {
  name: 'Louay Barraq',
  email: 'louaybarraq@gmail.com',
  githubLogin: 'Louay-Barraq',
  github: 'https://github.com/Louay-Barraq',
  linkedin: 'https://www.linkedin.com/in/louay-barraq/',
  linkedinHandle: 'in/louay-barraq',
  googlePlay: 'https://play.google.com/store/apps/developer?id=Louay+Barraq',
  cv: {
    en: '/cv/Louay-Barraq-CV-EN.pdf',
    fr: '/cv/Louay-Barraq-CV-FR.pdf',
  },
};

export type ProjectStatus = 'closed' | 'play' | 'client' | 'soon' | null;

export interface Project {
  id: string;
  name: string;
  nameAr?: string;
  year: string;
  stack: string;
  status: ProjectStatus;
  repo: string;
  playUrl?: string;
}

const gh = (repo: string) => `${profile.github}/${repo}`;

export const projects: Project[] = [
  { id: 'fixtura', name: 'Fixtura', year: '2026', stack: 'Flutter · SQLite', status: 'closed', repo: gh('Fixtura') },
  { id: 'marketpulse', name: 'MarketPulse', year: '2026', stack: 'Flutter · Dart Frog · PostgreSQL', status: null, repo: gh('MarketPulse') },
  { id: 'paycheck', name: 'PayCheck', year: '2026', stack: 'Flutter · Firebase', status: 'play', repo: gh('PayCheck'), playUrl: 'https://play.google.com/store/apps/details?id=com.louaybarraq.paycheck' },
  { id: 'converti', name: 'Converti', year: '2025', stack: 'Flutter', status: 'play', repo: gh('Converti'), playUrl: 'https://play.google.com/store/apps/details?id=com.louaybarraq.converti' },
  { id: 'excellent-training', name: 'Excellent Training', year: '2025 – 2026', stack: 'React · Spring Boot · MySQL', status: 'client', repo: gh('excellent-training') },
  { id: 'monoledger', name: 'MonoLedger', year: '2025 – 2026', stack: 'Flutter · Supabase', status: 'soon', repo: gh('MonoLedger') },
  { id: 'diwenek', name: 'Diwenek', nameAr: 'ديوانك', year: '2025 – 2026', stack: 'Flutter · Google Gemini AI', status: 'soon', repo: gh('Diwenek') },
  { id: 'khetmti', name: 'Khetmti', nameAr: 'ختمتي', year: '2024 – 2026', stack: 'Flutter · Firebase', status: 'soon', repo: gh('Khetmti') },
  { id: 'smartqueue', name: 'SmartQueue', year: '2024 – 2025', stack: 'ESP32 · Flutter · Firebase · AI', status: null, repo: gh('SmartQueue') },
  { id: 'mouzikti', name: 'Mouzikti', year: '2026', stack: 'Python', status: null, repo: gh('Mouzikti') },
];

export type AppStatus = 'live' | 'closed' | 'soon';

export interface App {
  id: string;
  name: string;
  nameAr?: string;
  status: AppStatus;
  url?: string;
  // Put icons in public/images/apps/ and set e.g. '/images/apps/converti.png'
  icon?: string;
}

export const apps: App[] = [
  { id: 'converti', name: 'Converti', status: 'live', url: 'https://play.google.com/store/apps/details?id=com.louaybarraq.converti', icon: '/images/apps/converti.png' },
  { id: 'paycheck', name: 'PayCheck', status: 'live', url: 'https://play.google.com/store/apps/details?id=com.louaybarraq.paycheck', icon: '/images/apps/paycheck.png' },
  { id: 'fixtura', name: 'Fixtura', status: 'closed', icon: '/images/apps/fixtura.png' },
  { id: 'diwenek', name: 'Diwenek', nameAr: 'ديوانك', status: 'soon' },
  { id: 'monoledger', name: 'MonoLedger', status: 'soon' },
  { id: 'khetmti', name: 'Khetmti', nameAr: 'ختمتي', status: 'soon', icon: '/images/apps/khetmti.png' },
];

export interface Cert {
  id: string;
  name: string;
  color: string;
  detail?: string;
  url: string;
}

export const certs: Cert[] = [
  { id: 'cisco', name: 'Data Analytics Essentials', color: '#388BFD', url: 'https://www.credly.com/badges/4e822f1d-797a-49aa-ac33-4fcb7e540886/linked_in_profile' },
  { id: 'ibm', name: 'Big Data Engineer Certificate', color: '#79C0FF', url: 'https://www.credly.com/badges/e0d478e7-6857-415a-9c01-19468d1301a0/linked_in_profile' },
  { id: 'efset', name: 'EF SET English Certificate', color: '#3FB950', detail: 'C2 Proficient · 82/100', url: 'https://cert.efset.org/en/wkKo2G' },
  { id: 'scrum', name: 'Scrum Fundamentals Certified (SFC)', color: '#E3B341', url: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=1030655' },
  { id: 'cs50p', name: 'CS50P · Introduction to Programming with Python', color: '#F85149', url: 'https://certificates.cs50.io/9cbf0e23-0238-4756-832c-54c44b47623c.pdf?size=letter' },
  { id: 'cs50x', name: 'CS50x · Introduction to Computer Science', color: '#F85149', url: 'https://certificates.cs50.io/f5620d07-4ad3-4d9f-b504-7c3bdeb0a730.pdf?size=letter' },
];

export const efsetUrl = 'https://cert.efset.org/en/wkKo2G';

export interface Tech {
  name: string;
  ab: string;
  bg: string;
  fg: string;
}

const W = '#FFFFFF';
const K = '#0D1117';
const t = (name: string, ab: string, bg: string, fg = W): Tech => ({ name, ab, bg, fg });

export type StackGroupId = 'languages' | 'frameworks' | 'data' | 'tools';

export const stack: { id: StackGroupId; items: Tech[] }[] = [
  { id: 'languages', items: [t('Dart', 'Da', '#0175C2'), t('Java', 'Jv', '#E76F00'), t('Python', 'Py', '#3776AB'), t('JavaScript', 'JS', '#F7DF1E', K), t('C / C++', 'C+', '#00599C'), t('SQL', 'SQ', '#336791'), t('VHDL', 'VH', '#6E4C9E')] },
  { id: 'frameworks', items: [t('Flutter', 'Fl', '#02569B'), t('React', 'Re', '#61DAFB', K), t('Spring Boot', 'Sb', '#6DB33F', K), t('Dart Frog', 'DF', '#0175C2'), t('Flask', 'Fk', '#E6EDF3', K), t('Django', 'Dj', '#0C4B33'), t('TensorFlow', 'TF', '#FF6F00', K), t('OpenCV', 'CV', '#5C3EE8'), t('Pandas', 'Pd', '#E70488'), t('NumPy', 'Np', '#4DABCF', K), t('PyQt6', 'Qt', '#41CD52', K)] },
  { id: 'data', items: [t('Firebase', 'Fb', '#FFCA28', K), t('Supabase', 'Sp', '#3ECF8E', K), t('PostgreSQL', 'Pg', '#4169E1'), t('MySQL', 'My', '#4479A1'), t('SQL Server', 'MS', '#CC2927'), t('SQLite', 'Sl', '#0F80CC'), t('Redis', 'Rd', '#DC382D')] },
  { id: 'tools', items: [t('Git', 'Gt', '#F05032'), t('GitHub', 'GH', '#E6EDF3', K), t('Docker', 'Dk', '#2496ED'), t('Android Studio', 'AS', '#3DDC84', K), t('IntelliJ', 'IJ', '#FE315D'), t('DBeaver', 'DB', '#A1795A', K), t('Figma', 'Fg', '#F24E1E'), t('ROS', 'RS', '#7D8CA8', K), t('MQTT', 'MQ', '#8E3D96'), t('Maven', 'Mv', '#C71A36'), t('MATLAB', 'ML', '#E16737', K), t('Cisco Packet Tracer', 'PT', '#1BA0D7', K)] },
];

export const spokenLanguages = [
  { id: 'ar', native: 'العربية', lang: 'ar', tone: 'green' },
  { id: 'fr', native: 'Français', lang: 'fr', tone: 'blue' },
  { id: 'en', native: 'English', lang: 'en', tone: 'yellow', verify: efsetUrl },
] as const;
