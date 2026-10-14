import en from './en';
import fr from './fr';
import ar from './ar';
import type { Dict, Locale } from './types';

export const dicts: Record<Locale, Dict> = { en, fr, ar };

export const localeLabels: Record<Locale, string> = { en: 'EN', fr: 'FR', ar: 'ع' };

export const localePath = (locale: Locale) => (locale === 'en' ? '/' : `/${locale}/`);

export type { Dict, Locale };
