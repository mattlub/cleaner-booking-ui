import React from 'react'
import { formatTime } from '../helpers'

const TimeSlot = ({ slot, handleSlotClick }) => {
  const { start, end, possible } = slot
  const slotClass = "time-slot" + (possible ? " possible" : "")
  return (
    <div
      className={ slotClass }
      onClick={ () => handleSlotClick() }
    >
      { formatTime(start) + " - " + formatTime(end) }
    </div>
  )
}

export default TimeSlot