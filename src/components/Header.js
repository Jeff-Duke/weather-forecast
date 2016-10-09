import React from 'react';
import { Link } from 'react-router';

const Header = ({ onLoadWeather, localWeather }) => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="main-title">Weather Tracker</h1>
      </Link>
      <section className="header-stripe">
        <section className="header-text-container">
          <p className="forecast-current">
            Current forecast for Denver: {localWeather.temp}
          </p>
          <button
          className="weather-button"
          onClick={onLoadWeather}
          >
            Load current weather
          </button>
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
