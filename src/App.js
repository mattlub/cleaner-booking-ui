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
      availabilityData: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  getAvailability () {
    this.setState({
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
  }

  render () {
    return (

      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Housekeep</h1>
        </header>

        <h2>
          Book a cleaner.
        </h2>

        <form onSubmit={ this.handleFormSubmit } >
          <TimeInput
            value={ this.state.selectedPeriod }
            handleInputChange={ this.handleInputChange }
          />
          <button type="submit">
            Find a cleaner!
          </button>
        </form>

        { this.state.isLoadingData &&
          <span>Loading Results...</span>
        }

        { this.state.availabilityData && !this.state.isLoadingData &&
          <Calendar
            availabilityData={ this.state.availabilityData }
          />
        }

      </div>
    )
  }
}

export default App
