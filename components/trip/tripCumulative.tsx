import RecycleGreenArrowsCard from 'components/cards/recycleGreenArrowsCard'
import type { TotalAmountProps } from 'types/supabase'
// import type { TripProps } from 'types/supabase'

const TripCumulative = ({ trip }: { trip: TotalAmountProps }) => {
  // OLD LOGIC WHEN THE AMOUNT COMES FROM MATERIALS
  // // Assuming 'trip' is an array of Trip objects
  // const cumulativeTotalArray = trip.map((element: { [x: string]: string }) => {
  //   // Replace commas with an empty string, and then parse as a floating-point number.
  //   const value = parseFloat(element['cumulative_total'].replace(',', '.'))
  //   return !isNaN(value) ? value : 0
  // })
  // const cumulativeTotal = cumulativeTotalArray.reduce(
  //   (accumulator: any, currentValue: any) => accumulator + currentValue,
  //   0
  // )
  // // 'sum' now contains the sum of all the valid numeric 'cumulative_total' values in the 'trip' array while preserving decimal values and handling commas.

  // Initialize a variable to store the total sum
  let totalSum = 0

  // Loop through each trip in the array
  trip.forEach((tripItem) => {
    // Check if the tripItem has the "total_amount_collected" property
    if (tripItem.total_amount_collected) {
      // Loop through the keys (years) in "total_amount_collected"
      for (const year in tripItem.total_amount_collected) {
        if (year in tripItem.total_amount_collected) {
          // Add the value for the current year to the totalSum
          totalSum += tripItem.total_amount_collected[year]
        }
      }
    }
  })

  // Use toFixed(1) to round to one decimal place
  return (
    <RecycleGreenArrowsCard>
      <div className="flex flex-col mr-6 md:mr-20 items-end mt-6 md:mt-20">
        <div className="flex flex-col mr-2 items-end align-center">
          <h1 className="z-1 text-gray-600">
            {parseFloat(totalSum.toFixed(1))} toneladas
          </h1>
          <h3 className="z-1 text-gray-600 -mt-5">recicladas</h3>
        </div>
        <div>
          <button className="rounded-full bg-foreground text-gray-700 py-1 px-6 mt-4 border border-gray-500">
            Certificado
          </button>
        </div>
      </div>
    </RecycleGreenArrowsCard>
  )
}

export default TripCumulative
