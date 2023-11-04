import Link from 'next/link'
import Image from 'next/image'

import ToolTip from 'components/toolTip'
import TheCirculArtBulb from 'assets/logos/circulart-green-bulb.svg'

const HeaderBulbIcon = () => {
  return (
    <ToolTip text="Vuelve a la página principal" placement="bottom-start">
      <Link href="/dashboard" target="_self">
        <Image
          src={TheCirculArtBulb}
          alt="The circulart bulb in green"
          width={40}
          height={40}
        />
      </Link>
    </ToolTip>
  )
}

export default HeaderBulbIcon
