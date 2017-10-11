import React from 'react'

const Calendar = ({ availabilityData }) => (
  <div className="calendar">
    { availabilityData.map(( date, i ) => (
        <div className="calendar-day" key={ i }>
          <span>{ date.day }</span>
        </div>
    ))}
  </div>
)

export default Calendar