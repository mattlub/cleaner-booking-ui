import React from 'react'
import { formatTime } from '../helpers'

const TimeSlot = ({ slot, day, clickHandler }) => {
  const { start, end, possible } = slot
  const slotClass = "time-slot" + (possible ? " possible" : "")
  return (
    <div
      className={ slotClass }
      onClick={ () => clickHandler(slot, day) }>
      { formatTime(start) + " - " + formatTime(end) }
    </div>
  )
}

export default TimeSlot