// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { i18n } from './i18n-config';

export default createMiddleware({
  // Specify the locales you want to support
  locales: i18n.locales,
  // Used when no locale matches
  defaultLocale: i18n.defaultLocale,
  localePrefix: i18n.localePrefix
});

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /images, /favicon.ico, etc.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};