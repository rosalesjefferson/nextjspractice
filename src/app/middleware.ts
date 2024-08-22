import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware executed for:', request.url);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
