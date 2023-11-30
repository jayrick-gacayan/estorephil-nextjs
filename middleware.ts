import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'ph'],
  defaultLocale: 'en'
});

export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}


export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next/static|favicon.ico|_vercel|.*\\..*).*)']
};