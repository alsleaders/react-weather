import React, { Component } from 'react'

class MarsWeather extends Component {
  state = {
    date: '',
    weather: '',
    max: '',
    min: ''
  }
  componentDidMount() {
    console.log('component mounted')
    this.getMarsData()
  }

  getMarsData = () => {
    fetch('https://mars.nasa.gov/rss/api/json/msl_marsweather.json')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        console.log({ data })
        console.log('did the Mars fetch work?')
        console.log(data.soles[0].terrestrial_date)
        console.log(data.soles[0].atmo_opacity)
        console.log(data.soles[0].max_temp)
        console.log(data.soles[0].min_temp)
        this.setState({
          date: data.soles[0].terrestrial_date,
          weather: data.soles[0].atmo_opacity,
          max: data.soles[0].max_temp,
          min: data.soles[0].min_temp
        })
      })
  }
  render() {
    return (
      <section>
        In case you're wondering. The temperature in the Gale crater on Mars for
        the Earth date {this.state.date} is {this.state.weather}, the high is{' '}
        {this.state.max} and the low is {this.state.min} degrees Celsius.
      </section>
    )
  }
}

export default MarsWeather
