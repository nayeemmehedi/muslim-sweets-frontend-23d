import { NextResponse, type NextRequest } from 'next/server'
import Cookies from 'universal-cookie';
const cookies = new Cookies();



// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

//     cookies.set('auth', 'Pacman');
// cookies.set('auths', undefined);


    // console.log(request.nextUrl.pathname.startsWith('/login'))
    const auth = cookies.get('auths')

    if (!auth) {

        return NextResponse.redirect(new URL('/login', request.url))
    } else {
         return NextResponse.next()
    }


    //   return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [],
    // '/signup',"/payment-success"
}