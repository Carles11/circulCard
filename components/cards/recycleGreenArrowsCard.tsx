import Image, { StaticImageData } from 'next/image'
import RecycleGreenArrows from 'assets/images/icons/SVG/recycle-green-arrows.svg'
import { ReactNode } from 'react' // Import ReactNode

interface RecycleGreenArrowsCardProps {
  children: ReactNode
  icon?: StaticImageData
}

const RecycleGreenArrowsCard = ({
  children,
  icon,
}: RecycleGreenArrowsCardProps) => {
  return (
    <div className="transition ease-in-out delay-150 w-full rounded rounded-md hover:scale-110">
      <div className="z-0 relative w-full h-44 md:h-64 border rounded-xl bg-none dark:bg-gray-300 dark:shadow dark:shadow-md dark:shadow-gray-500">
        <Image
          src={icon ? icon : RecycleGreenArrows}
          alt="TheCirculArt Green Recycle Arrows"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          style={{ zIndex: -1 }}
          className="ml-4 md:ml-10"
        />
        {children}
      </div>
    </div>
  )
}

export default RecycleGreenArrowsCard
