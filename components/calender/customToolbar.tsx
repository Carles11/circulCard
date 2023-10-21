import React from 'react'

// import { useRouter } from 'next/router' // For Next.js routing

interface CustomToolbarProps {
  localizer: {
    messages: {
      today: string
      previous: string
      next: string
      month: string
      week: string
      day: string
      agenda: string
    }
  }
  label: string
  onNavigate: any
  date: Date
}

class CustomToolbar extends React.Component<CustomToolbarProps> {
  render() {
    console.log('this.props-in-toolbar', this.props)
    let navigate: (action: string) => void
    const {
      localizer: { messages },
      label,
      onNavigate,
      date,
    } = this.props

    var currentDisplayDate = date

    function nextweek() {
      var nextweek = new Date(
        currentDisplayDate.getFullYear(),
        currentDisplayDate.getMonth(),
        currentDisplayDate.getDate() + 7
      )
      return nextweek
    }

    function getLastWeeksDate() {
      return new Date(
        currentDisplayDate.getFullYear(),
        currentDisplayDate.getMonth(),
        currentDisplayDate.getDate() - 7
      )
    }

    navigate = (action: string) => {
      if (action === 'PREVIOUS') {
        // Navigate to the previous route
        console.log('preiousiing------')
        onNavigate(action, getLastWeeksDate())
      } else if (action === 'NEXT') {
        console.log('nexting------')
        // Navigate to the next route
        onNavigate(action, nextweek())
      }
    }

    /* tslint:disable-next-line */
    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button
            type="button"
            onClick={() => navigate('PREVIOUS')} // Use the action string
          >
            {messages.previous}
          </button>
        </span>
        <span className="rbc-toolbar-label">{label}</span>
        <span className="rbc-btn-group">
          <button
            type="button"
            onClick={() => navigate('NEXT')} // Use the action string
          >
            {messages.next}
          </button>
        </span>
      </div>
    )
  }
}

export default CustomToolbar
