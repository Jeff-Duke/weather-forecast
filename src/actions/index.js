import fetch from 'isomorphic-fetch';

const apiKey = '9b9ce697dc74009c';
const weatherURL = `https://api.wunderground.com/api/${apiKey}`;

export const receiveCurrentWeatherByGPS = (json) => {
    return {
        type: 'CURRENT_LOCAL_WEATHER_GPS',
        currentLocalForecast: json
    };
};

export const receiveCurrentExtendedForecast = (json) => {
    return {
        type: 'CURRENT_EXTENDED_FORECAST',
        extendedForecast: json
    };
};

export const fetchCurrentWeatherByGPS = (position) => {
    let weatherURLbyGPS = `${weatherURL}/conditions/q/${position.coords.latitude},${position.coords.longitude}.json`;
    console.log(weatherURLbyGPS);
    return (dispatch) => {
        return fetch(weatherURLbyGPS)
            .then(response => response.json())
            .then(jsonResponse => dispatch(receiveCurrentWeatherByGPS(jsonResponse)));
    };
};

export const fetchLocalExtendedForecast = (position) => {
    let weatherURLextendedForecast = `${weatherURL}/forecast/q/${position.coords.latitude},${position.coords.longitude}.json`;

    return dispatch => {
        return fetch(weatherURLextendedForecast)
            .then(response => response.json())
            .then(jsonResponse => dispatch(receiveCurrentExtendedForecast(jsonResponse)));
    };
};

export const receiveCurrentPinnedCityWeather = (pinnedCityWeather, cityInfo, zipcode) => {
    let payload = Object.assign(cityInfo, { zipcode, id: Date.now() }, pinnedCityWeather);
    return {
        type: 'PINNNED_CITY_CURRENT_WEATHER',
        payload
    };
};

export const fetchPinnedCityWeather = (cityInfo, zipcode) => {
    let weatherURLbyZip = `${weatherURL}/forecast/q/${zipcode}.json`;;

    return dispatch => {
        return fetch(weatherURLbyZip)
            .then(response => response.json())
            .then(pinnedCityWeather => dispatch(receiveCurrentPinnedCityWeather(pinnedCityWeather, cityInfo, zipcode)));
    };
};

export const fetchPinnedCityInfo = (zipcode) => {
    let zipURL = `http://ZiptasticAPI.com/${zipcode}`;

    return (dispatch) => {
        return fetch(zipURL)
            .then(response => response.json())
            .then(cityInfo => dispatch(fetchPinnedCityWeather(cityInfo, zipcode)));
    };
};
