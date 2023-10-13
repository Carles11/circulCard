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

const styles = {
  container: {
    width: '80%',
    height: 'auto',
    margin: '2em',
  },

  '@media only screen and (min-width: 601px) and (max-width: 1024px)': {
    container: {
      width: '60vw',
    },
  },
  '@media only screen and (min-width: 1025) ': {
    container: {
      width: '40vw',
    },
  },
}

// CustomWeekView.navigate = (date, action, { localizer }) => {
//   switch (action) {
//     case Navigate.PREVIOUS:
//       return localizer.add(date, -3, 'day')

//     case Navigate.NEXT:
//       return localizer.add(date, 3, 'day')

//     default:
//       return date
//   }
// }

// CustomWeekView.title = (date) => {
//   return `My awesome week: ${date.toLocaleDateString()}`
// }

export default function CustomCalendar({ trip }: { trip: TripProps }) {
  const index = 0
  console.log({ trip })
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
      resourceId: 2,
      allDay: true,
    },
    {
      id: 2,
      title: 'Tratamiento',
      start: treatmentDate,
      end: treatmentDate,
      resourceId: 3,
      allDay: true,
    },
    {
      id: 11,
      title: 'Salida',
      start: outDate,
      end: outDate,
      resourceId: 4,
      allDay: true,
    },
  ]

  return (
    <div style={styles.container}>
      <BigCalendar
        localizer={localizer}
        events={events}
        defaultView={Views.WEEK}
        views={CustomWeekView}
        steps={60}
        defaultDate={new Date()}
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        // formats={formats}
      />
    </div>
  )
}
