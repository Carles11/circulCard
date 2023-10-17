import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function Unauthenticated() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className="flex flex-col items-center my-28 mx-36">
      <p className="text-xl text-center">
        Es necesario registrarse para ver esta aplicación.
      </p>
      <Link
        href={'/login'}
        className="py-2 px-4 rounded-md no-underline bg-btn-background m-16"
      >
        <button className="bg-lightgreenBg py-2 px-8 rounded-full text-lg text-foreground hover:bg-btn-background-hover ">
          <h4>
            <strong>Identifícate</strong>
          </h4>
        </button>
      </Link>
      <p className="text-md ">
        o{' '}
        <a
          href="mailto:xavi@thecirculart.com"
          rel="noopener"
          target="_blank"
          className="link-with-style"
        >
          contáctanos
        </a>{' '}
        para recibir datos de acceso.
      </p>
    </div>
  )
}
