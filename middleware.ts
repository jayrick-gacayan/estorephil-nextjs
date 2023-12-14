import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'ph'];
const publicPages = ['/', '/home', '/all-categories', '/login', '/courier/:path*'];

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'en'
});

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null
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
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}
export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    '/((?!api|_next/static|favicon.ico|_vercel|.*\\..*).*)',
  ]
};