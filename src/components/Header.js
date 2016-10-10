import React from 'react';
import { Link } from 'react-router';

const Header = ({ onLoadWeather, localWeather }) => {
  let localTemp = localWeather.main.temp || 22;
  return (
    <header>
      <Link to="/" className="header">
        <h1 className="main-title">Weather Tracker</h1>
      </Link>
      <section className="header-stripe">
        <section className="header-text-container">
          <p className="forecast-current">
            Current forecast for {localWeather.name}<br/>
            Temp: {localTemp} <br/>
            Condition: {localWeather.weather[0].main}
          </p>
          <Link to="/ExtendedForecast"
            className="forecast-extended">
            View Extended Forecast &#10163;
          </Link>
        </section>
      </section>
    </header>
  );
}

export default Header;
