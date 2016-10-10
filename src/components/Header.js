import React from 'react';
import {Link} from 'react-router';

const Header = ({localWeatherReducer}) => {
    return (
        <header className="header">
            <Link to="/" className="header">
                <h1 className="main-title">Weather Tracker</h1>
            </Link>
            <section className="header-stripe">
                <section className="header-text-container">
                  <article className="forecast-current">
                      {Object.keys(localWeatherReducer).length > 0
                          ? <ul>
                              <li>Current forecast for {localWeatherReducer.name}</li>
                              <li>Temp: {Math.round(localWeatherReducer.main.temp)}</li>
                              <li>Condition: {localWeatherReducer.weather[0].main}</li>
                          </ul>

                          : <p>Fetching Local Weather ...</p>}
                  </article>
                    <Link to="/ExtendedForecast" className="forecast-extended">
                        View Extended Forecast &#10163;
                    </Link>
                </section>
            </section>
        </header>
    );
}

export default Header;
