import Image from 'next/image'
import { iconMap } from 'utils/utils.service'

import { Key } from 'react'

const MaterialsIcons = ({ projects }: { projects: Array<any> }) => {
  return (
    <div className="flex items-center mt-4">
      {projects.map(
        (
          item: { life_icon: string | number; life_name: string },
          index: Key | null | undefined
        ) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center  cursor-pointer"
          >
            <Image
              src={iconMap[item.life_icon]}
              alt="The circular projects"
              height={75}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <h4 className="text-gray-600 text-xs">
              {item.life_name.toUpperCase()}
            </h4>
          </div>
        )
      )}
    </div>
  )
}

export default MaterialsIcons
