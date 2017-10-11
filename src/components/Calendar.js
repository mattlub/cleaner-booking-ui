import React from 'react'
import TimeSlot from './TimeSlot'

const Calendar = ({ availabilityData }) => (
  <div className="calendar">
    { availabilityData.map(( date, i ) => (
        <div className="calendar-day" key={ i }>
          <span>{ date.day }</span>
          { date.startTimes.map(({ start, possible }, i) => (
            <TimeSlot
              key={ i }
              start={ start }
              possible={ possible }
            />
          ))}
        </div>
    ))}
  </div>
)

export default Calendar