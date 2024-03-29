import RecycleGreenArrowsCard from 'components/cards/recycleGreenArrowsCard'
import type { TotalAmountProps } from 'types/supabase'

import { calculateTotalPeso, convertToTons } from 'utils/utils.service'
// import type { TripProps } from 'types/supabase'

const TripCumulative = ({ trip }: { trip: TotalAmountProps }) => {
  const totalPeso = calculateTotalPeso(trip)
  const displayInTones = convertToTons(totalPeso)
  const isInTons = displayInTones.isInTons
  const displayWeight = displayInTones.weight
  // console.log({ trip, totalPeso, displayInTones })

  return (
    <RecycleGreenArrowsCard>
      <div className="flex flex-col mr-6 md:mr-20 items-end mt-6 md:mt-20">
        <div className="flex flex-col mr-2 items-end align-center">
          {/* <h3 className="z-1 text-left text-gray-600">Más de</h3> */}
          <h1 className="z-1 text-gray-600 leading-8">
            {displayWeight} {isInTons ? 'toneladas' : 'kilos'}
          </h1>
          <h3 className="z-1 text-gray-600">
            {isInTons ? 'recogidas' : 'recogidos'}
          </h3>
        </div>
        {/* <div>
          <button className="rounded-full bg-foreground text-gray-700 py-1 px-6 mt-4 border border-gray-500">
            Certificado
          </button>
        </div> */}
      </div>
    </RecycleGreenArrowsCard>
  )
}

export default TripCumulative
