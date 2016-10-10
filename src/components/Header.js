import React from 'react';
import {Link} from 'react-router';

const Header = ({ localWeatherReducer }) => {
    return (
        <header className="header">
            <Link to="/">
                <h1 className="main-title">Weather Tracker</h1>
            </Link>
            <section className="header-stripe">
                <section className="header-text-container">
                    <p className="forecast-current">
                        {Object.keys(localWeatherReducer).length > 0
                            ? `Current forecast for ${ localWeatherReducer.name }
                                  Temp: ${ Math.round(localWeatherReducer.main.temp) }
                                  Condition: ${ localWeatherReducer.weather[0].main }`
                            : `Fetching Local Weather ...`}
                    </p>
                    <Link to="/ExtendedForecast" className="forecast-extended">
                        View Extended Forecast &#10163;
                    </Link>
                </section>
            </section>
        </header>
    );
}

export default Header;
