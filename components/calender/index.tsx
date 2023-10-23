// @ts-nocheck
'use client'

import { useState } from 'react'
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
} from 'react-big-calendar'
import 'moment/locale/es' // Import the Spanish locale
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import CustomWeekView from './customWeekView'
import CustomToolbar from './customToolbar'
import type { TripProps } from 'types/supabase'

moment.locale('es')
const localizer = momentLocalizer(moment)

const resourceMap = [
  { resourceId: 1, resourceTitle: 'Movimientos por semanas' },
  // { resourceId: 2, resourceTitle: 'Training room' },
  // { resourceId: 3, resourceTitle: 'Meeting room 1' },
  // { resourceId: 4, resourceTitle: 'Meeting room 2' },
]

export default function CustomCalendar({ trip }: { trip: TripProps }) {
  const [displayedDate, setDisplayedDate] = useState(new Date())
  const index = 0
  const collectDate = trip[index]['collect_full_date']
  const cleanPointDate = trip[index]['clean_point_date']
  const treatmentDate = trip[index]['treatment_date']
  const outDate = trip[index]['out_date']
  const events = [
    {
      id: 0,
      title: 'Recogida',
      start: collectDate,
      end: collectDate,
      resourceId: 1,
      allDay: true,
    },
    {
      id: 1,
      title: 'Punto limpio',
      allDay: true,
      start: cleanPointDate,
      end: cleanPointDate,
      resourceId: 1,
      allDay: true,
    },
    {
      id: 2,
      title: 'Tratamiento',
      start: treatmentDate,
      end: treatmentDate,
      resourceId: 1,
      allDay: true,
    },
    {
      id: 11,
      title: 'Salida',
      start: outDate,
      end: outDate,
      resourceId: 1,
      allDay: true,
    },
  ]
  const handleNavigate = (date, action) => {
    // Calculate the new date based on the current date and the action
    let newDate
    if (action === 'PREV') {
      // Go to the previous week
      // newDate = moment(date).subtract(7, 'days').toDate()
    } else if (action === 'NEXT') {
      // Go to the next week
      // newDate = moment(date).add(7, 'days').toDate()
    } else {
      // Handle other actions as needed
      newDate = date
    }

    // Update the state or any variable that controls the displayed date in your calendar
    // For example, you might use React state to manage the calendar's date
    setDisplayedDate(newDate)
  }

  return (
    <div className="w-full text-gray-700">
      <BigCalendar
        localizer={localizer}
        events={events}
        defaultView={Views.WEEK}
        views={CustomWeekView}
        steps={60}
        // defaultDate={new Date()}
        date={displayedDate}
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        components={{ toolbar: CustomToolbar }}
        // formats={localizer.formats.dayHeaderFormat}
        onNavigate={handleNavigate}
      />
    </div>
  )
}
