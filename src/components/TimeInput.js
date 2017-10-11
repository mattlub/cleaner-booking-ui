import React from 'react'

const TimeInput = ({ value, handleInputChange }) => {
  return (
    <div>
      <label>Please select your required cleaning period:</label>
      <input type="range" min="0.5" max="6" step="0.5"
        defaultValue={ value }
        onChange={ e => handleInputChange(e) }
      />
      <span>{ value }</span>
    </div>
  )
}

export default TimeInput