import React from 'react';
const _ = require('lodash')

const ExtendedForecast = ({ExtendedForecast}) => {
  console.log(ExtendedForecast)
    var initialData = _.map(ExtendedForecast, (value, key) => _.extend(value, { key }))
    var fiveDay = _.map(initialData[4], (value, key) => _.extend(value, { key }))
    var fiveDayForecasts = fiveDay.map((item) => {
      return {date: item.dt_txt, min_temp: item.main.temp_min, max_temp: item.main.temp_max, humidity: item.main.humidity}
    })
    return (
      <section className="extended-container">

          {Object.keys(ExtendedForecast).length > 0 ?
            <div>
            <h1>{ExtendedForecast.city.name}</h1>
        <ul>
        {fiveDayForecasts.length > 0 ?
            fiveDayForecasts.map(forecast => <li key={Math.random()}>
            Date: {forecast.date} Min temp: {forecast.min_temp} Max temp: {forecast.max_temp} Humidity: {forecast.humidity}
           </li>)
          : f => f
        }

        </ul>
        </div>
          : <p>Fetching 5 day/3 hour forecast...</p>}
      </section>
    )
  }


export default ExtendedForecast;
