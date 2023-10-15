import Image from 'next/image'
import RecycleGreenArrows from 'assets/images/icons/SVG/recycle-green-arrows.svg'
import type { TripProps } from 'types/supabase'

const TripCumulative = ({ trip }: { trip: TripProps }) => {
  // Assuming 'trip' is an array of Trip objects
  const index = 0
  // @ts-ignore
  const cumulativeTotal = trip[index]['cumulative_total']
  return (
    <div className="z-0 relative w-full h-44 md:h-64 border rounded-xl bg-gray-300 shadow shadow-md shadow-gray-500">
      <Image
        src={RecycleGreenArrows}
        alt="TheCirculArt Green Recycle Arrows"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        style={{ zIndex: -1 }}
      />
      <div className="flex flex-col mr-2 items-end 9 md:mt-20">
        <div className="flex flex-col mr-2 items-end">
          <h1 className="z-1 text-gray-700">{cumulativeTotal}</h1>
          <h3 className="z-1 text-gray-700">recogidas</h3>
        </div>
        <div>
          <button className="rounded-full bg-white text-gray-700 py-1 px-6 mt-4">
            Certificado
          </button>
        </div>
      </div>
    </div>
  )
}

export default TripCumulative
