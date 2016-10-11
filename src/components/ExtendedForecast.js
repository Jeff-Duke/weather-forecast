import React from 'react';
const _ = require('lodash')

const getDate = (n) => {
  ExtendedForecast.list.map((item) => {
    item.dt_txt
  })
}

const ExtendedForecast = ({ExtendedForecast}) => {
  debugger;
    var initialData = _.map(ExtendedForecast, (value, key) => _.extend(value, { key }))
    var fiveDay = _.map(initialData[4], (value, key) => _.extend(value, { key }))
    var fiveDayForecasts = fiveDay.map((item) => {
      return {Date: item.dt_txt, min_temp: item.main.temp_min, max_temp: item.main.temp_max, humidity: item.main.humidity}
    })
   var UniqueTimes = _.uniqBy(fiveDayForecasts)
  //  var theGoods = _.sortBy(fiveDay, function(o) { return o.dt_txt; })
    return (
      <section className="extended-container">
          {Object.keys(ExtendedForecast).length > 0 ?
        <ul>
          <li>Date: {ExtendedForecast.list[0].dt_txt.split(' ')[0]}</li>
          <li>City: {ExtendedForecast.city.name}</li>
          <li>Min-Temp: {ExtendedForecast.list[0].main.temp_min}</li>
          <li>Max-Temp: {ExtendedForecast.list[0].main.temp_max}</li>
          <li>Humidity: {ExtendedForecast.list[0].main.humidity}</li>

        </ul>
          : <p>Fetching 5 day/3 hour forecast...</p>}
      </section>
    )
  }


export default ExtendedForecast;
