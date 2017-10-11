const formatHours = numHours => {
	return numHours === "1"
    ? numHours + " hour"
    : numHours + " hours"
}

export { formatHours }