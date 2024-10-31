// i18n-config.ts
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = 'en' as const;

export const i18n = {
  defaultLocale,
  locales,
  localePrefix: 'always'
} as const;