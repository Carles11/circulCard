'use client'

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

class CustomToolbar extends React.Component<
  CustomToolbarProps,
  { updatedDate: Date }
> {
  constructor(props: CustomToolbarProps) {
    super(props)
    this.state = {
      updatedDate: this.props.date,
    }
  }

  render() {
    let navigate: (action: string) => void
    const {
      localizer: { messages },
      label,
      onNavigate,
    } = this.props
    const { updatedDate } = this.state
    var currentDisplayDate = this.state.updatedDate

    const getNextWeekDate = () => {
      var nextweek = new Date(
        currentDisplayDate.getFullYear(),
        currentDisplayDate.getMonth(),
        currentDisplayDate.getDate() + 7
      )
      this.setState({ updatedDate: nextweek })
      return updatedDate
    }

    const getLastWeeksDate = () => {
      var lastWeek = new Date(
        currentDisplayDate.getFullYear(),
        currentDisplayDate.getMonth(),
        currentDisplayDate.getDate() - 7
      )
      this.setState({ updatedDate: lastWeek })
      return updatedDate
    }

    navigate = (action: string) => {
      if (action === 'PREVIOUS') {
        // Navigate to the previous route
        onNavigate(action, getLastWeeksDate())
      } else if (action === 'NEXT') {
        // Navigate to the next route
        onNavigate(action, getNextWeekDate())
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
