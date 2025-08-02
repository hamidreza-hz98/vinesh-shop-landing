import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';

const PUBLIC_FILE = /\.(.*)$/;

const locales = ['en', 'fa', 'pt', 'ar'];
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const negotiatorHeaders = {};
    request.headers.forEach((value, key) => {
      negotiatorHeaders[key] = value;
    });

    const language = new Negotiator({ headers: negotiatorHeaders }).language(locales);
    const locale = matchLocale([language], locales, defaultLocale);

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!_next|favicon.ico|api|.*\\..*).*)'],
};
