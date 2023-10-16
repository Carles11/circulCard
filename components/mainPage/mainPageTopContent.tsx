import Link from 'next/link'
import Image from 'next/image'

import TheCirculArtBulb from 'assets/logos/circulart-green-bulb.svg'
import TheCirculArtTextLogoDark from 'assets/logos/main-logo-dark-mode.svg'
import TheCirculArtTextLogoLight from 'assets/logos/main-logo-light-mode.svg'

function mainPageTopContent() {
  return (
    <div className="flex flex-col gap-0 dark:gap-4 justify-center items-center">
      <Link href="https://thecirculart.com/" target="_blank">
        <Image
          src={TheCirculArtBulb}
          alt="The circulart bulb in green"
          width={50}
          height={50}
        />
      </Link>
      {/*SWITCH LOGO DEPENDING ON THEME*/}
      <Image
        src={TheCirculArtTextLogoDark}
        alt="dark-mode-thecirculart-logo"
        width={200}
        priority={true}
        className="hidden dark:block"
      />
      <Image
        className="block dark:hidden"
        src={TheCirculArtTextLogoLight}
        alt="light-mode-thecirculart-logo"
        width={200}
      />
    </div>
  )
}

export default mainPageTopContent
