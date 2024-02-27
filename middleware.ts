import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const accessToken = request.cookies.get("accessToken")
  const pathname = request.nextUrl.pathname

  console.log("pathname in middleware", pathname)

  const notAccess = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup"

  if (notAccess) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }else{
    if(!accessToken) {
      return NextResponse.redirect(new URL(`/login?search=${pathname}`, request.url))
    }
  }




}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/payment-failed','/payment-success','/payment-option','/confirm-product', '/signup', '/login'],
}