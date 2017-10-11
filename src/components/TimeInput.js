import React from 'react'
import { formatHours } from '../helpers'

const TimeInput = ({ value, handleInputChange}) => (
  <div>
    <label className="form-label">Please select your required cleaning period:</label>
    <div className="timeinput-container">
      <input type="range" min="0.5" max="6" step="0.5"
        defaultValue={ value }
        onChange={ e => handleInputChange(e) }
      />
      <span className="timeinput-value">{ formatHours(value) }</span>
    </div>
  </div>
)

export default TimeInput