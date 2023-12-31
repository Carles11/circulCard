// @ts-nocheck
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CustomWeekView from './customWeekView'
import type { TripProps } from 'types/supabase'

moment.locale('en-GB')
const localizer = momentLocalizer(moment)

const resourceMap = [
  { resourceId: 1, resourceTitle: 'Movimientos de esta semana' },
  // { resourceId: 2, resourceTitle: 'Training room' },
  // { resourceId: 3, resourceTitle: 'Meeting room 1' },
  // { resourceId: 4, resourceTitle: 'Meeting room 2' },
]

export default function CustomCalendar({ trip }: { trip: TripProps }) {
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

  return (
    <div className="w-full text-gray-700">
      <BigCalendar
        localizer={localizer}
        events={events}
        defaultView={Views.WEEK}
        views={CustomWeekView}
        steps={60}
        defaultDate={new Date()}
        date={new Date()}
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        // formats={formats}
      />
    </div>
  )
}
