import React from 'react';
import { Link } from 'react-router';

const CityCard = ({pinnedCurrentForecast}) => {
  // console.log(pinnedCurrentForecast);
  // console.log(this.props.zipcode);
  // this.props.fetchCurrentWeatherByZip(80021);

    return (
      <section className="city-card">
        {Object.keys(pinnedCurrentForecast).length > 0 ?
        <article>
          <h1 className="city-title">{pinnedCurrentForecast.name}</h1>
          <ul className="city-list">
            <li className="city-li">Current temp: {pinnedCurrentForecast.main.temp}&#8457;</li>
            <li className="city-li">Condition: {pinnedCurrentForecast.weather[0].description}</li>
          </ul>
        </article>
        : <p>Fetching pinned city forecast ...</p>}
        <article className="pinned-forecast-extended">
          <Link to="/ExtendedForecast"
          // add route to extended forecast for particular zipcode
            className="pinned-link">
            View Extended Forecast &#10163;
          </Link>
        </article>
      </section>
    );
};

export default CityCard;
