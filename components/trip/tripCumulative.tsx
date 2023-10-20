import Image from 'next/image'
import RecycleGreenArrows from 'assets/images/icons/SVG/recycle-green-arrows.svg'
import type { TripProps } from 'types/supabase'

const TripCumulative = ({ trip }: { trip: TripProps }) => {
  // Assuming 'trip' is an array of Trip objects
  const index = 0
  // @ts-ignore
  const cumulativeTotal = trip[index]['cumulative_total']
  return (
    <div className="z-0 relative w-full h-44 md:h-64 border rounded-xl bg-none dark:bg-gray-300 dark:shadow dark:shadow-md dark:shadow-gray-500">
      <Image
        src={RecycleGreenArrows}
        alt="TheCirculArt Green Recycle Arrows"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        style={{ zIndex: -1 }}
        className="ml-4 md:ml-10"
      />
      <div className="flex flex-col mr-6 md:mr-20 items-end mt-6 md:mt-20">
        <div className="flex flex-col mr-2 items-end align-center">
          <h1 className="z-1 text-gray-600">{cumulativeTotal}</h1>
          <h3 className="z-1 text-gray-600 -mt-5">recogidas</h3>
        </div>
        <div>
          <button className="rounded-full bg-foreground text-gray-700 py-1 px-6 mt-4 border border-gray-500">
            Certificado
          </button>
        </div>
      </div>
    </div>
  )
}

export default TripCumulative
