import Link from 'next/link'
import Image from 'next/image'

import LogoutButton from 'components/LogoutButton'
import TheCirculArtBulb from '../assets/logos/circulart-green-bulb.svg'

function mainHeader({ user }: { user: object }) {
  return (
    <div>
      {user && (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
            <div />
            <div>
              <div className="flex items-center gap-4">
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
          </div>
        </nav>
      )}
    </div>
  )
}

export default mainHeader
