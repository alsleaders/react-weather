import React, { Component } from 'react';

class WeatherSearch extends Component {
  render() {
    return (
      <div>
        fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      Tampa +
      '&appid=017ef3e4bf1e11d8cf9397e2e73fd25a' 
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    // then display
    .then(city => {
      console.log({ city })
      console.log(city.weather)
      console.log(city.weather[0])
    })
      </div>
    );
  }
}

export default WeatherSearch;
