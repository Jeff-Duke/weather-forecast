import React from 'react';
const _ = require('lodash');
import { Link } from 'react-router';

const ExtendedForecast = ({ExtendedForecast, zipCode}) => {

    return (
      <div>
        <Link to="/" className="header">
        <h1 className="main-title">BACK TO PINS</h1>
        </Link>

      <section className="extended-container">
          {ExtendedForecast.forecastday ?
            <article>
              <h1>EXTENDED FORECAST</h1>
              <h1>City: {ExtendedForecast.city}</h1>
              <br/>
              <ul>
                { ExtendedForecast.forecastday.map((day) => <li key={day.period}> <img src={day.icon_url} alt="weather icon" /> {day.title} -- {day.fcttext}</li>)}
              </ul>
            </article>
          : <p>Fetching Extended forecast...</p>}
      </section>
    </div>
    )
  }


export default ExtendedForecast;