import React from 'react'
import TimeSlot from './TimeSlot'

const Calendar = ({ availabilityData, handleSlotClick }) => (
  <div className="calendar">
    { availabilityData.map(( date, i ) => (
        <div className="calendar-day" key={ i }>
          <span>{ date.day }</span>
          { date.startTimes.map((slot, i) => (
            <TimeSlot
              key={ i }
              slot={ slot }
              onClick={ handleSlotClick }
            />
          ))}
        </div>
    ))}
  </div>
)

export default Calendar