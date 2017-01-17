import React from 'react';
const _ = require('lodash');
import { Link } from 'react-router';

const ExtendedForecast = ({ExtendedForecast, zipCode}) => {
    let initialData = _.map(ExtendedForecast, (value, key) => _.extend(value, { key }));
    let fiveDay = _.map(initialData[4], (value, key) => _.extend(value, { key }));
    let fiveDayForecasts = fiveDay.map((item) => {
      debugger;
      return {
        date: item.dt_txt, 
        min_temp: item.main.temp_min, 
        max_temp: item.main.temp_max, 
        humidity: item.main.humidity};
    });
    return (
      <div>
        <Link to="/" className="header">
        <h1 className="main-title">BACK TO PINS</h1>
        </Link>

      <section className="extended-container">
          {Object.keys(ExtendedForecast).length ?

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
    </div>
    )
  }


export default ExtendedForecast;
