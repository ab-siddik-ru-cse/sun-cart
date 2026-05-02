import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session) {
        const loginUrl = new URL('/login', request.url)

        const redirectTo =
            request.nextUrl.pathname + request.nextUrl.search

        loginUrl.searchParams.set('redirect', redirectTo)

        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/profile', '/product/details/:path', '/cart'],
}