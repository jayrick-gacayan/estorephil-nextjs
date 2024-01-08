import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ph'];
const publicPages = ['/', '/home', '/all-categories', '/login', '/agent/register',];

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'en'

});

const authMiddleware: any = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.includes('admin') ||
          req.nextUrl.pathname.startsWith('courier') ||
          req.nextUrl.pathname.includes('dashboard') ||
          req.nextUrl.pathname === '/' ||
          req.nextUrl.pathname === '/home' ||
          req.nextUrl.pathname === '/agent/register' ||
          req.nextUrl.pathname === '/all-categories'
        ) {
          return true;
        }
        return token != null
      }
    },
    pages: {
      signIn: '/login'
    }
  }
);

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  if (isPublicPage) {
    return intlMiddleware(req)
  } else {
    return (authMiddleware)(req);
  }
}

export const getValidSubdomain = (host?: string | null) => {
  let users = ['admin', 'courier', 'agent'];

  let subdomain: string | null = null;
  if (!host && typeof window !== 'undefined') {
    // On client side, get the host from window
    host = window.location.host;
  }
  if (host && host.includes('.')) {
    const candidate = host.split('.')[0];
    if (candidate && !candidate.includes('localhost')) {
      // Valid candidate
      subdomain = candidate;
    }
  }
  return subdomain;
};

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    '/((?!api|_next/static|favicon.ico|_vercel|.*\\..*).*)',
  ]
};

