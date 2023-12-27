import { NextMiddlewareWithAuth, withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'ph'];
const publicPages = ['/', '/home', '/all-categories', '/login', '/agent/register',];

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'en'
});

const authMiddleware: NextMiddlewareWithAuth = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },

  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.includes('admin') ||
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
    secret: "dVecWxuLKpdiMHr4MyVWAF5aBg8S7mddGNuSd66bLPk=",
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