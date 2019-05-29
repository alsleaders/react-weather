import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import WeatherSearch from './components/WeatherSearch'
import MarsWeather from './components/MarsWeather'

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <WeatherSearch />
        <MarsWeather />
      </>
    )
  }
}

export default App
