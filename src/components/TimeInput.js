import React from 'react'
import { formatHours } from '../helpers'

const TimeInput = ({ value, handleInputChange}) => (
  <div>
    <label>Please select your required cleaning period:</label>
    <input type="range" min="0.5" max="6" step="0.5"
      defaultValue={ value }
      onChange={ e => handleInputChange(e) }
    />
    <span>{ formatHours(value) }</span>
  </div>
)

export default TimeInput