'use client'

import { useRouter, usePathname } from 'next/navigation'

import Link from 'next/link'

function authHeader() {
  const router = useRouter()
  const pathname = usePathname()
  const urlIsHome = pathname === '/'
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
        {!urlIsHome && (
          <Link
            href="/"
            className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm link-no-style"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>{' '}
            <button type="button" onClick={() => router.back()}>
              Volver
            </button>
          </Link>
        )}
        {/* <div className="flex items-center gap-4">
          <LogoutButton />
        </div> */}
      </div>
    </nav>
  )
}

export default authHeader
