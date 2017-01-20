import React from 'react';

const PinnedCityExtended = ({
    zipcode,
    weatherInfo
}) => {
    debugger;
    return (
        <article>
            {Object.keys(weatherInfo).length ?
                <ul>
                    <li>City: {weatherInfo.city} </li>
                    <li>Temp: {Math.round(weatherInfo.current_observation.temp_f)} </li>
                    <li>Outlook: {weatherInfo.current_observation.weather} </li>
                    <li>Humidity: {weatherInfo.current_observation.relative_humidity}</li>
                </ul>
                : <p> Fetching forecast... </p>}
        </article>
    )
};

export default PinnedCityExtended;
