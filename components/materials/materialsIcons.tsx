import Image from 'next/image'

import HERZicon from 'assets/images/icons/herz.png'
import FITNESSicon from 'assets/images/icons/fitness.png'
import PROJECTSicon from 'assets/images/icons/projects.png'

const MaterialsIcons = () => {
  return (
    <div className="flex align-center mt-4">
      <div className="flex flex-col gap-2 items-center">
        <Image
          src={HERZicon}
          alt="The circulart products"
          height={75}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <h4 className="text-gray-200 text-xs">{'sanitario'.toUpperCase()}</h4>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Image
          src={FITNESSicon}
          alt="The circulart products"
          height={75}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <h4 className="text-gray-200 text-xs">
          {'construcción'.toUpperCase()}
        </h4>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Image
          src={PROJECTSicon}
          alt="The circulart products"
          height={75}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <h4 className="text-gray-200 text-xs">{'proyectos'.toUpperCase()}</h4>
      </div>
    </div>
  )
}

export default MaterialsIcons
