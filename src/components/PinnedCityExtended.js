import React from 'react';

const PinnedCityExtended = ({ zipcode, weatherInfo }) => {
    return (
        <section>
            {Object.keys(weatherInfo).length ?
                <article>
                    <ul>
                        <li>City: {weatherInfo.city} </li>
                        <li>Current temp: {Math.round(weatherInfo.current_observation.temp_f)} </li>
                        <li>Current Outlook: {weatherInfo.current_observation.weather} </li>
                    </ul>
                    <h1>Extended Forecast</h1>
                    <ul>
                        {weatherInfo.txt_forecast &&
                            weatherInfo.txt_forecast.forecastday.map((day) => <li key={day.period}> <img src={day.icon_url} alt="weather icon" /> {day.title} -- {day.fcttext}</li>)}
                    </ul>
                </article>
                : <p> Fetching forecast... </p>}
        </section>
    )
};

export default PinnedCityExtended;
