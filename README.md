# housekeep-ui

A prototype browser-based application for users looking to book cleaners, that allows them to see times that are available during a given week, select one, and book in their visit.

### instructions to run locally
```bash
git clone <this repo>
npm install
npm start
```

### My method
- simple wireframes
- use create-react-app
- create input field component
- implement get request
- create calendar component
- some simple css
- create slotTime component

## Specification

A customer wants to schedule a cleaning visit. Create a browser-based application that allows them to see times that are available during a given week, select one, and book in their visit.

Use the mock API that we have set up using Apiary:
http://docs.housekeepavailability.apiary.io/#

There are two endpoints, both of which are documented at the link above. Apiary responds as if it were a real API, but it is not actually performing queries on real data, or writing to a database. It just returns a fixed JSON response to each possible request.

### Requirements:
The user can specify the duration of the cleaning job that they want to book in hours
Availability data is requested via GET request to the /availability/ endpoint defined in Apiary, (see above)
The data returned describing available start times is displayed in a user-friendly interface. Consider a calendar-type view.
The user can select an available start timeslot. Timeslots that are not possible are not selectable.
When the user has selected a timeslot, this is indicated visually.
The user can then confirm their booking. On confirmation, POST to the /book/ endpoint defined in Apiary, submitting the relevant details of what has been selected.
Parse the server's response and show what has been booked.