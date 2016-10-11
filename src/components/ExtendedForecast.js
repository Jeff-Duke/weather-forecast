import React from 'react';
const _ = require('lodash')

const ExtendedForecast = ({ExtendedForecast}) => {
    var initialData = _.map(ExtendedForecast, (value, key) => _.extend(value, { key }))
    var fiveDay = _.map(initialData[4], (value, key) => _.extend(value, { key }))
    var fiveDayForecasts = fiveDay.map((item) => {
      return {date: item.dt_txt, min_temp: item.main.temp_min, max_temp: item.main.temp_max, humidity: item.main.humidity}
    })
    return (
      <section className="extended-container">

          {Object.keys(ExtendedForecast).length > 0 ?
            <div>
            <h1>5 DAY 3 HOUR FORECAST</h1>
            <h1>City: {ExtendedForecast.city.name}</h1>
            <br/>
        <ul>
        {fiveDayForecasts.length > 0 ?
            fiveDayForecasts.map(forecast => <li className="extended-list" key={Math.random()}>
            Date: {forecast.date}
            <br/>
            Min temp: {forecast.min_temp}{" "}
            Max temp: {forecast.max_temp}{" "}
            Humidity: {forecast.humidity}
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
