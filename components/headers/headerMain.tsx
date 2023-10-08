'use client'

import { useRouter } from 'next/navigation'
import { urlIsHome } from 'utils/utils.service'

import Link from 'next/link'
import Image from 'next/image'

import LogoutButton from 'components/LogoutButton'
import TheCirculArtBulb from 'assets/logos/circulart-green-bulb.svg'

function mainHeader({ user }: { user: object }) {
  const router = useRouter()
  console.log('urlIsHomeurlIsHomeurlIsHome', urlIsHome())
  return (
    <div className="text-white flex flex-row justify-between border-b border-b-foreground/10 h-16">
      <div>
        {' '}
        {!urlIsHome() && (
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
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link
          href="https://thecirculart.com/"
          target="_blank"
          className="link-no-style"
        >
          <Image
            src={TheCirculArtBulb}
            alt="The circulart bulb in green"
            width={50}
            height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </Link>
        <LogoutButton />
      </div>
    </div>
  )
}

export default mainHeader
