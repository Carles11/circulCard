import Image from 'next/image'
import { StaticImageData } from 'next/image'

import HERZicon from 'assets/images/icons/herz.png'
import FITNESSicon from 'assets/images/icons/fitness.png'
import PROJECTSicon from 'assets/images/icons/projects.png'
import { Key } from 'react'

const iconMap: Record<string, StaticImageData> = {
  herz: HERZicon,
  fitness: FITNESSicon,
  projects: PROJECTSicon,
}

const MaterialsIcons = ({ projects }: { projects: Array<any> }) => {
  return (
    <div className="flex items-center mt-4">
      {projects.map(
        (
          item: { life_icon: string | number; life_name: string },
          index: Key | null | undefined
        ) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <Image
              src={iconMap[item.life_icon]}
              alt="The circular projects"
              height={75}
              className="shadow shadow-blue-500/40 hover:shadow-indigo-500/40"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <h4 className="text-gray-200 text-xs">
              {item.life_name.toUpperCase()}
            </h4>
          </div>
        )
      )}
    </div>
  )
}

export default MaterialsIcons
