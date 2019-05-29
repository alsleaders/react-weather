import React, { Component } from 'react'

const beginningOfWeatherUrl =
  'https://api.openweathermap.org/data/2.5/weather?q='

class WeatherSearch extends Component {
  state = {
    value: '',
    weather: {},
    city: [],
    temp: ''
  }

  handleChange = event => {
    console.log('are you updating value')
    this.setState({
      value: this.state.value
    })
  }

  updateCity = event => {
    console.log('take the value and make weather')
    this.setState({
      value: event.target.value
    })
  }

  goGetTheWeather = () => {
    fetch(
      `${beginningOfWeatherUrl}${
        this.state.value
      }&APPID=017ef3e4bf1e11d8cf9397e2e73fd25a&units=metric`
    )
      .then(response => {
        console.log(response)
        return response.json()
      })
      // then display
      .then(city => {
        console.log({ city })
        console.log('is something happening?')
        console.log(city.weather)
        console.log(city.weather[0])
        console.log(city.weather[0].description)
        this.setState({
          weather: city.weather[0],
          city: city.name,
          temp: city.main.temp
        })
        console.log(this.state.weather)
        console.log(this.state.city)
        console.log(this.state.temp)
      })
      .catch(error => {
        alert('Please check your entry and try your search again!')
      })
  }
  render() {
    return (
      <div>
        <p>Hallo!</p>
        <input
          type="text"
          placeholder="Enter a city or zip code"
          value={this.state.value}
          onChange={this.updateCity}
        />
        <button onClick={this.goGetTheWeather}>Submit</button>
        <p>
          The weather in {this.state.city} is {this.state.weather.description}{' '}
          and it is {this.state.temp} degrees Celsius.
        </p>
      </div>
    )
  }
}

export default WeatherSearch
