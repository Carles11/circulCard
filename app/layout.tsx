import './globals.css'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import Head from 'next/head'

import MainHeader from '@/components/headers/headerMain'
import AuthHeader from '@/components/headers/headerAuth'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from 'components/themeSwitcher'

export const metadata: Metadata = {
  title: 'TheCirculArt',
  description: 'Generated by TheCirculArt',
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

  console.log({ user })
  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        <title>TheCirculArt recycling process</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="grid grid-cols-1 divide-y">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="w-full p-2 md:p-8 bg-white dark:bg-background ">
            <nav className="h-16">
              {user ? <MainHeader email={user.email} /> : <AuthHeader />}
              <ThemeSwitcher />
            </nav>
          </header>
          <main className="w-full min-h-screen bg-white dark:bg-background flex flex-col items-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
