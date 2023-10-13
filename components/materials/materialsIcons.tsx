import Image from 'next/image'
import { iconMap } from 'utils/utils.service'

import { Key } from 'react'

const MaterialsIcons = ({ projects }: { projects: Array<any> }) => {
  console.log('PROJECTS-FOR-ICONS', projects)
  return (
    <div className="flex items-center mt-4">
      {projects.map(
        (
          item: { project_icon: string | number; project_name: string },
          index: Key | null | undefined
        ) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <Image
              src={iconMap[item.project_icon]}
              alt="The circular projects"
              height={75}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <h4 className="text-gray-600 text-xs">
              {item.project_name.toUpperCase()}
            </h4>
          </div>
        )
      )}
    </div>
  )
}

export default MaterialsIcons
