// adds 'hour' or 'hours' to a decimal amount of hours
const formatHours = numHours => {
	return numHours === "1"
    ? numHours + " hour"
    : numHours + " hours"
}

// formats a time in the format 'HH:MM:SS' to 'HH:MM'
const formatTime = time => time.slice(0, 5)

export { formatHours, formatTime }