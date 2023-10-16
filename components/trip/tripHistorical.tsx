// @ts-nocheck
import Image from 'next/image'
import type { TripProps } from 'types/supabase'

import JourneyLine from 'assets/images/icons/SVG/journey/journey-line.svg'
import JourneyDot from 'assets/images/icons/SVG/journey/journey-dot.svg'

const TripHistorical = ({ trip }: { trip: TripProps }) => {
  // Assuming 'trip' is an array of Trip objects
  const index = 0
  const collectDate = trip[index]['collect_full_date']
  const cleanPointDate = trip[index]['clean_point_date']
  const treatmentDate = trip[index]['treatment_date']
  const analysisDate = trip[index]['analysis_date']
  const outDate = trip[index]['out_date']
  return (
    <div className="w-full flex flex-col md:flex-row p-2 sm:p-8 md:pl-20 border rounded-xl bg-[#79d97c] shadow shadow-xs shadow-gray-300 h-fit mb-10">
      <div className="flex flex-col justify-around h-full w-full md:w-1/2 m-2 md:m-8 h-auto">
        <div>
          <h5 className="text-gray-700">Recogida</h5>
          <h5 className="text-foreground">{collectDate}</h5>
        </div>
        <div>
          <h5 className="text-gray-700">Punto limpio</h5>
          <h5 className="text-foreground">{cleanPointDate}</h5>
        </div>
        <div>
          <h5 className="text-gray-700">Tratamiento</h5>
          <h5 className="text-foreground">{treatmentDate}</h5>
        </div>
        <div>
          <h5 className="text-gray-700">Análisis</h5>
          <h5 className="text-foreground">Estimado el {analysisDate}</h5>
        </div>
        <div>
          <h5 className="text-gray-700">Salida</h5>
          <h5 className="text-foreground">Estimado el {outDate}</h5>
        </div>
      </div>
      <div className="relative h-full w-full md:w-1/2">
        <h4 className="text-foreground text-right mr-32 mt-4">Histórico</h4>
        <div className="relative md:absolute right-0 top-0">
          <Image
            src={JourneyLine}
            alt="theCirculArt Journey"
            // fill={true}
            // objectFit="cover"
            // objectPosition="right"
            style={{ width: '120%', maxWidth: 'none' }}
          />
        </div>
        <div className="absolute right-20 md:right-6 top-52 sm:top-60 md:top-20">
          <Image
            src={JourneyDot}
            height={65}
            width={65}
            alt="theCirculArt Journey"
            // objectFit="contain"
            // objectPosition="right"
          />
        </div>
      </div>
    </div>
  )
}

export default TripHistorical
