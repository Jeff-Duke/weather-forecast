import React from 'react';

const ExtendedForecast = ({ExtendedForecast}) => {
    return (
      <section className="extended-container">
          {Object.keys(ExtendedForecast).length > 0 ?
        <ul>
          <li>Current forecast for {ExtendedForecast.city.name}</li>
          <li>Current forecast for {ExtendedForecast.list[0].main.temp}</li>
        </ul>
          : <p>Fetching 5 day/3 hour forecast...</p>}
      </section>
    )
  }


export default ExtendedForecast;
