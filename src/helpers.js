// import moment from 'moment'

// adds 'hour' or 'hours' to a decimal amount of hours
const formatHours = numHours => {
	return numHours === "1"
    ? numHours + " hour"
    : numHours + " hours"
}

// formats a time in the format 'HH:MM:SS' to 'HH:MM'
const formatTime = time => time.slice(0, 5)

// converts "YYYY-MM-DD" date string to e.g. "3rd Dec 2017"
const prettyDate = dateString => {
  // return moment(dateString, "YYYY-MM-DD").format("Do MMM YYYY")
  return dateString.split("-").reverse().join("/")
}

export { formatHours, formatTime, prettyDate }