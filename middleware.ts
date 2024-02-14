import { NextResponse, type NextRequest } from 'next/server'
import Cookies from 'js-cookie';

export async function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname

    const isPublicPath = path == "/login" || path == "/signup"

    // console.log(request.nextUrl.pathname.startsWith('/login'))
    const auth = Cookies.get('accessToken')


    // auth && isPublicPath

    if (auth && isPublicPath) {
        return NextResponse.redirect(new URL('/', request.url))
    }


    if (!auth && !isPublicPath) {

        return NextResponse.redirect(new URL('/login', request.url))
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [],

    // matcher: ["/payment-option", "/payment-success", "/confirm-product", "/card" ,"/aboutUs"],
    // '/signup',"/payment-success"
}