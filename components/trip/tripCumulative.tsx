import Image from 'next/image'
import RecycleGreenArrows from 'assets/images/icons/SVG/recycle-green-arrows.svg'
import type { TripProps } from 'types/supabase'

const TripCumulative = ({ trip }: { trip: TripProps }) => {
  // Assuming 'trip' is an array of Trip objects
  const index = 0
  // @ts-ignore
  const cumulativeTotal = trip[index]['cumulative_total']
  return (
    <div className="relative w-full h-44 md:h-64 border rounded-xl bg-gray-300 shadow shadow-md shadow-gray-500">
      <div className="">
        <Image
          src={RecycleGreenArrows}
          // height={200}
          // width={300}
          alt="TheCirculArt Green Recycle Arrows"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="z-0"
        />
      </div>
      <h1 className="absolute right-10 md:right-48 top-8 md:top-32 z-1 text-gray-700">
        {cumulativeTotal}
      </h1>

      <h3 className="absolute right-10 md:right-48 top-16 md:top-44 z-1 text-gray-700">
        recogidas
      </h3>
      <button className="absolute right-10 bottom-5 rounded-full bg-white py-1 px-6">
        Certificado
      </button>
    </div>
  )
}

export default TripCumulative
