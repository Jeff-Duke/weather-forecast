import React from 'react';
import { Link } from 'react-router';

const CityCard = ({pinnedCurrentForecast}) => {
  console.log(pinnedCurrentForecast);
    return (
      <section className="city-card">
        {Object.keys(pinnedCurrentForecast).length > 0 ?
        <article>
          <h1 className="city-title">{pinnedCurrentForecast.name}</h1>
          <ul>
            <li>Current temp {pinnedCurrentForecast.main.temp}</li>
            <li><Link to="/ExtendedForecast"
              className="pinned-forecast-extended">
              View Extended Forecast &#10163;
            </Link></li>
          </ul>
        </article>
        : <p>Fetching 5 day/3 hour forecast...</p>}
      </section>
    );
};

export default CityCard;
