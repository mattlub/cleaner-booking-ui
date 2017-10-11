import React from 'react'

const TimeInput = props => {
  return (
    <div>
      <label>Please select your required cleaning period:</label>
      <input type="range" min="0.5" max="6" step="0.5" />
      <span></span>
    </div>
  )
}

export default TimeInput