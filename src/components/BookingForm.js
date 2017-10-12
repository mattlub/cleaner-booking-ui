import React from 'react'
import { prettyDate, formatTime } from '../helpers'

const BookingForm = ({ selectedSlot }) => (
	<form>
    <p>You have selected a start time of { formatTime(selectedSlot.slot.start) } - { formatTime(selectedSlot.slot.end) } on { prettyDate(selectedSlot.day) }</p>
    <button className="submit-button" type="submit">
      Book Slot!
    </button>
  </form>
)

export default BookingForm