import Link from 'next/link'
import Image from 'next/image'

import LogoutButton from 'components/LogoutButton'
import TheCirculArtBulb from 'assets/logos/circulart-green-bulb.svg'

function mainHeader({ user }: { user: object }) {
  return (
    <div className="text-white flex flex-row justify-between border-b border-b-foreground/10 h-16">
      <div>hola {user.email}</div>
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
