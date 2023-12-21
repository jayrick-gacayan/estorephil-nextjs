import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

async function handler(request: NextRequest) {
  const { pathname } = request.nextUrl // Use parse to get the pathname

  if (request.method === 'POST' && pathname === '/api/cookies-country') {
    let cookieStore = cookies();
    let response = await request.json();

    console.log('respnse', response);
    cookieStore.set({
      name: 'country_code',
      value: response.country_code,
      httpOnly: true,
      path: '/',
      secure: true,
      expires: Date.now() + (7 * 24 * 60 * 60 * 1000)
    });

    return NextResponse.json({
      data: {
        message: 'Country code cookie successfully added.'
      }
    }, { status: 200 });
  } else if (request.method === 'GET' && pathname === '/api/cookies-country') {
    let countryCookie: RequestCookie | undefined = request.cookies.get('country_code');



    return NextResponse.json({ data: { country_code: request.cookies.get('country_code')?.value ?? 'ph' } }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Invalid route or method' }, { status: 404 });
  }
}

export { handler as GET, handler as POST }