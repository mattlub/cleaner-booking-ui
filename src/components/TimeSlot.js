import React from 'react'

const TimeSlot = ({ start, possible }) => {
  const slotClass = "time-slot" + (possible ? " possible" : "")
  return (
    <div className={ slotClass }>
      { start }
    </div>
  )
}

export default TimeSlot