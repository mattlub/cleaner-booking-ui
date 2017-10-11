import React, { Component } from 'react'
import qs from 'querystring'
import TimeInput from './components/TimeInput'
import Calendar from './components/Calendar'
import './App.css'
import { availabilityUrl } from './constants'

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedPeriod: 2,
      isLoadingData: false,
      hasErrored: false,
      availabilityData: null,
      selectedSlot: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleSlotClick = this.handleSlotClick.bind(this)
  }

  getAvailability () {
    this.setState({
      selectedSlot: null,
      hasErrored: false,
      isLoadingData: true
    })
    const queries = {
      weekBeginning: '2016-12-05',
      visitDuration: this.state.selectedPeriod,
      postcode: 'EC1R 3BU'
    }
    const url = availabilityUrl + qs.stringify(queries)
    return fetch(url)
      .then(response => response.json())
  }

  handleInputChange (e) {
    this.setState({
      selectedPeriod: e.target.value
    })
  }

  handleFormSubmit (e) {
    e.preventDefault()
    this.getAvailability()
      .then(data => this.setState({
        isLoadingData: false,
        availabilityData: data
      }))
      .catch(err => this.setState({
        isLoadingData: false,
        hasErrored: true
      }))
  }

  handleSlotClick (slot, day) {
    if (!slot.possible) {
      // maybe set message saying you can't select it
      return
    }
    this.setState({
      selectedSlot: { slot, day }
    })
  }
  

  render () {
    return (

      <div className="app">

        <header className="app-header">
          <h1 className="app-title">Housekeep</h1>
        </header>
        <section className="content">

          <h2>
            Book a cleaner.
          </h2>

          <form onSubmit={ this.handleFormSubmit } >
            <TimeInput
              value={ this.state.selectedPeriod }
              handleInputChange={ this.handleInputChange }
            />
            <button className="submit-button" type="submit">
              Find a cleaner!
            </button>
          </form>

          { this.state.isLoadingData &&
            <span>Loading Results...</span>
          }

          { this.state.availabilityData && !this.state.selectedSlot &&
            <span>Please select an available start period.</span>
          }

          { this.state.hasErrored &&
            <span>Error loading results, please try again.</span>
          }

          { this.state.selectedSlot && 
            <form>
              <p>You have selected a start time of { this.state.selectedSlot.slot.start } on { this.state.selectedSlot.day }</p>
              <button type="submit">
                Book Slot!
              </button>
            </form>
          }

          { this.state.availabilityData && !this.state.isLoadingData &&
            <Calendar
              availabilityData={ this.state.availabilityData }
              handleSlotClick={ this.handleSlotClick }
            />
          }

        </section>
      </div>
    )
  }
}

export default App
