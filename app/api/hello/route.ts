import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ data: { country_code: 'ph' } }, { status: 200 });
}
