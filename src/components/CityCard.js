import React from 'react';
import { Link } from 'react-router';

const CityCard = React.createClass({
  render() {
    return (
      <section className="city-card">
        <h1 className="city-title">City Name</h1>
        <Link to="/ExtendedForecast"
          className="pinned-forecast-extended">
          View Extended Forecast &#10163;
        </Link>
      </section>
    );
  }
});

export default CityCard;
