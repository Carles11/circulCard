import Link from 'next/link'
import Image from 'next/image'

import TheCirculArtBulb from 'assets/logos/circulart-green-bulb.svg'
import TheCirculArtText from 'assets/logos/__circulart-NO-bulb-text-white-green.svg'

function mainPageTopContent() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Link href="https://thecirculart.com/" target="_blank">
        <Image
          src={TheCirculArtBulb}
          alt="The circulart bulb in green"
          width={50}
          height={50}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </Link>

      <Image
        src={TheCirculArtText}
        alt="The circulart"
        width={200}
        priority={true}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  )
}

export default mainPageTopContent
