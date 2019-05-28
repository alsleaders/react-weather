import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import WeatherSearch from './components/WeatherSearch'

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <WeatherSearch />
      </>
    )
  }
}

export default App
