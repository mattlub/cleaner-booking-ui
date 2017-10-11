import React, { Component } from 'react'
import './App.css'
import TimeInput from './components/TimeInput'

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedPeriod: 2
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    console.log(e.target.value)
    this.setState({
      selectedPeriod: e.target.value
    })
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

        <TimeInput
          value={ this.state.selectedPeriod }
          handleInputChange={ this.handleInputChange }
        />

      </div>
    )
  }
}

export default App
