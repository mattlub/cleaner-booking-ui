import React from 'react'
import TimeSlot from './TimeSlot'
import { prettyDate } from '../helpers'

const Calendar = ({ availabilityData, handleSlotClick }) => (
  <div className="calendar">
    { availabilityData.map(( date, i ) => (
        <div className="calendar-day" key={ i }>
          <span>{ prettyDate(date.day) }</span>
          { date.startTimes.map((slot, i) => (
            <TimeSlot
              key={ i }
              slot={ slot }
              day= { date.day }
              clickHandler={ handleSlotClick }
            />
          ))}
        </div>
    ))}
  </div>
)

export default Calendar