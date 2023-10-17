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
      <Link href={'/login'} className="py-2 px-4 rounded-md no-underline m-16">
        <button className="bg-lightgreenBg rounded-full text-lg px-4 py-2 mb-2 hover:bg-btn-background-hover hover:text-btn-text-color-hover">
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
