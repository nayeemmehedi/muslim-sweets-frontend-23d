import { NextResponse, NextRequest } from 'next/server';

// Define the protected routes
const protectedRoutes = [
  '/card',
  '/payment-failed',
  '/payment-success',
  '/payment-option',
  '/confirm-product',
];

// Configure the middleware to run for the protected routes
export const config = {
  matcher: protectedRoutes.map((route) => `${route}/:id*`),
};

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const requestedUrl = request.nextUrl.pathname;

  // Check if the requested route is protected
  if (protectedRoutes.some((route) => requestedUrl.startsWith(route))) {
    // If the user is not authenticated, redirect to the login page
    if (!accessToken) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', requestedUrl);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If the user is authenticated or the requested route is not protected, continue
  return NextResponse.next();
}

// export const config = {
//   matcher: ['/payment-failed','/payment-success','/payment-option','/confirm-product'],
// }