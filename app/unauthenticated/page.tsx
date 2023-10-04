import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Unauthenticated() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className="flex flex-col items-center my-28">
      <p className="text-lg text-white">Please sign-in to see the app</p>
      <Link
        href={'/login'}
        className="py-2 px-4 rounded-md no-underline bg-btn-background"
      >
        <button className="bg-[#79d97c] py-0 px-8 mt-16 rounded-full text-lg text-white hover:bg-btn-background-hover ">
          <h4>
            <strong>Entrar</strong>
          </h4>
        </button>
      </Link>
      <p className="text-lg text-white">
        or{' '}
        <a href="mailto:xavi@thecirculart.com" rel="noopener" target="_blank">
          contact us
        </a>{' '}
        to get access
      </p>
    </div>
  )
}
