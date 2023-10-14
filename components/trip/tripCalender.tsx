import CustomCalendar from '@/components/calender'
import type { TripProps } from 'types/supabase'

const TripCalender = ({ trip }: { trip: TripProps }) => {
  return (
    <div className="w-full h-fit border rounded-xl bg-gray-200 shadow shadow-md shadow-gray-300 h-28 w-auto">
      <CustomCalendar trip={trip} />
    </div>
  )
}

export default TripCalender
