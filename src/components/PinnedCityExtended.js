import React from 'react';

const PinnedCityExtended = ({
    zipcode,
    weatherInfo
}) => {
    return (
        <article>
            {Object.keys(weatherInfo).length ?
                <ul>
                    <li>City: {weatherInfo.city} </li>
                    <li>Temp: {Math.round(weatherInfo.main.temp)} </li>
                    <li>Outlook: {weatherInfo.weather[0].description} </li>
                    <li>Humidity: {weatherInfo.main.humidity}</li>
                </ul>
                : <p> Fetching forecast... </p>}
        </article>
    )
};

export default PinnedCityExtended;
