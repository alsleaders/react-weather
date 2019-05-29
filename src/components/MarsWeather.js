import React, { Component } from 'react'

class MarsWeather extends Component {
  render() {
    // componentDidMount() {
    //   console.log('component mounted')
    //   this.getMarsData()
    // }

    // getMarsData = () => {
    //   fetch('https://mars.nasa.gov/rss/api/json/msl_marsweather.json')
    //     .then(response => {
    //       console.log(response)
    //       return response.json()
    //     })
    //     .then(data => {
    //       console.log({ data })
    //       console.log('did the Mars fetch work?')
    //     })
    // }

    return (
      <div>
        In case you're wondering. The current temperature in the Gale crater on
        Mars is <p>going to be filled in here when the fetch works</p>
      </div>
    )
  }
}

export default MarsWeather
