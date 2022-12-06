import { NextResponse } from 'next/server'

const adminPassword = process.env.ADMIN_PASSWORD

export default function middleware(req) {
  const url = req.nextUrl.pathname
  // Prevent users without the correct password cookie from going to /admin.
  const password = req.cookies.get('cs-password')
  if (url == '/login') {
    if (password != adminPassword) return
    return NextResponse.redirect(new URL('/admin', req.url))
  }
  else if (url == '/admin') {
    if (password == adminPassword) return
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

// Make middleware ignore all /api/ routes.
// This is due to a bug where middleware stalls
// all requests larger than 64 KB.
export const config = {
  matcher: ['/((?!api).*)'],
}