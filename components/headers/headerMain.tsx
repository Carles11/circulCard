'use client'

import { useRouter } from 'next/navigation'
import { urlIsHome } from 'utils/utils.service'
// import { useState } from 'react'
// import type { UserProps } from 'types/supabase'

import Link from 'next/link'
import Image from 'next/image'
import ToolTip from 'components/toolTip'

import LogoutButton from 'components/LogoutButton'
import TheCirculArtBulb from 'assets/logos/circulart-green-bulb.svg'

function mainHeader({ email }: { email: string | undefined }) {
  // const [showLogout, setShowLogout] = useState(false)
  const router = useRouter()

  // const handleShowLogout = (view: boolean) => {
  //   setShowLogout(view)
  // }

  // const onMouseOverHandler: MouseEventHandler<HTMLDivElement> = () => {
  //   handleShowLogout(true)
  // }

  // const onMouseOutHandler: MouseEventHandler<HTMLDivElement> = () => {
  //   handleShowLogout(false)
  // }

  return (
    <div className="flex justify-between text-foreground ">
      <div className="flex items-end">
        {!urlIsHome() ? (
          <div className="flex align-center">
            {' '}
            <Link href="/" className="flex items-center">
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
              <button
                type="button"
                onClick={() => router.back()}
                className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
              >
                Volver
              </button>
            </Link>
            <LogoutButton />
          </div>
        ) : (
          <div className="flex flex-col justify-start text-white ml-8">
            <p>
              Hola. {email}
              {''}
            </p>
          </div>
        )}
      </div>
      <div
        className="py-2 px-4 flex flex-col items-center"
        // onMouseOver={onMouseOverHandler}
        // onMouseOut={onMouseOutHandler}
      >
        <ToolTip text="Learn more about us on theCirculArt.com">
          <Link href="https://thecirculart.com/" target="_blank" className=" ">
            <Image
              src={TheCirculArtBulb}
              alt="The circulart bulb in green"
              width={40}
              height={40}
            />
          </Link>
        </ToolTip>
      </div>
    </div>
  )
}

export default mainHeader
