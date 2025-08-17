import { NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'fa', 'pt', 'ar'];
const defaultLocale = 'en';

// Middleware #1: Locale redirect
function localeMiddleware(request) {
  const { pathname } = request.nextUrl;

  // Skip public files and api
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const negotiatorHeaders = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
    const language = new Negotiator({ headers: negotiatorHeaders }).language(locales);
    const locale = matchLocale([language], locales, defaultLocale);

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

function authMiddleware(request) {
  const { pathname } = request.nextUrl;

  // Remove locale prefix from pathname
  const pathnameWithoutLocale = pathname.replace(/^\/(en|fa|pt|ar)/, '');

  if (pathnameWithoutLocale.startsWith('/profile')) {
    const token = request.cookies.get('token')?.value;
    if (!token) {
      // Redirect to login with locale preserved
      const locale = pathname.split('/')[1] || defaultLocale;
      return NextResponse.redirect(new URL(`/${locale}/auth`, request.url));
    }
  }

  return NextResponse.next();
}


// Compose multiple middlewares
export function middleware(request) {
  // Run locale first
  const localeResult = localeMiddleware(request);
  if (localeResult?.status !== 200) return localeResult; // redirect happened

  // Run auth next
  const authResult = authMiddleware(request);
  if (authResult?.status !== 200) return authResult;

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!_next|favicon.ico|api|.*\\..*).*)'],
};
