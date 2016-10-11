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
                          ? <p>Current forecast for {localWeatherReducer.name}: {localWeatherReducer.weather[0].main} {Math.round(localWeatherReducer.main.temp)}&#8457;</p>
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
