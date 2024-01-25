import './globals.css'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'

import MainHeader from 'components/headers/headerMain'
import AuthHeader from 'components/headers/headerAuth'
import { ThemeProvider } from './theme-provider'
import Context from 'context/context'
import { ScrollToTop } from 'utils/autoScrollings'

export const metadata: Metadata = {
  title: 'TheCirculArt statistics',
  description: 'Generated by TheCirculArt',
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/favicons/apple-touch-icon.png'],
    other: {
      rel: 'apple-touch-icon',
      url: '/favicons/apple-touch-icon.png',
    },
  },
}

export const dynamic = 'force-dynamic'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="es" suppressHydrationWarning>
      <ScrollToTop />
      <body className="grid grid-cols-1 divide-y-0 dark:divide-y-2 divide-neutral-700 dark:divide-slate-600">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Context>
            <header className="w-full p-8">
              <nav className="h-auto">
                {user ? <MainHeader email={user.email} /> : <AuthHeader />}
              </nav>
            </header>
            <main className="w-full min-h-screen flex flex-col items-center">
              {children}
            </main>
          </Context>
        </ThemeProvider>
      </body>
    </html>
  )
}
