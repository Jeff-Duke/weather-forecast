import fetch from 'isomorphic-fetch';

const apiKey = '9b9ce697dc74009c';
const weatherURL = `https://api.wunderground.com/api/${apiKey}`;

export const receiveCurrentLocalWeather = (cityInfo, weatherInfo) => {
    let payload = Object.assign(cityInfo.location, weatherInfo);
    return {
        type: 'CURRENT_LOCAL_WEATHER',
        currentLocalForecast: payload
    };
};

export const fetchCurrentLocalWeather = (cityInfo) => {
    const zipcode = cityInfo.location.zip;
    const currentWeatherByZip = `${weatherURL}/conditions/q/${zipcode}.json`;

    return dispatch => {
        return fetch(currentWeatherByZip)
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(weatherInfo => dispatch(receiveCurrentLocalWeather(cityInfo, weatherInfo)));
    };
};

export const receiveLocalExtendedForecast = (cityInfo, weatherInfo) => {
    let payload = Object.assign(cityInfo.location, weatherInfo.forecast.txt_forecast);
    return {
        type: 'CURRENT_EXTENDED_FORECAST',
        extendedForecast: payload
    };
};

export const fetchLocalExtendedForecast = (cityInfo) => {
    let zipcode = cityInfo.location.zip;
    let extendedByZip = `${weatherURL}/forecast/q/${zipcode}.json`;

    return dispatch => {
        return fetch(extendedByZip)
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(weatherInfo => dispatch(receiveLocalExtendedForecast(cityInfo, weatherInfo)));
    };
};

export const receivePinnedCityExtended = (weatherInfo, cityInfo, zipcode) => {
    debugger;
    let payload = Object.assign(weatherInfo, {
        zipcode,
        id: Date.now()
    });
    return {
        type: 'PINNED_CITY_EXTENDED_FORECAST',
        payload
    };
};

export const fetchPinnedCityExtended = (cityInfo, zipcode) => {
    let weatherURLbyZip = `${weatherURL}/forecast/q/${zipcode}.json`;
    debugger;
    return dispatch => {
        return fetch(weatherURLbyZip)
            .then(response => response.json())
            .catch(err => console.log('an error occurred', err))
            .then(pinnedCityExtended => dispatch(receivePinnedCityExtended(pinnedCityExtended, cityInfo, zipcode)));
    };
};

export const receivePinnedCityWeather = (pinnedCityWeather, cityInfo, zipcode) => {
    let payload = Object.assign(cityInfo, {
        zipcode,
        id: Date.now()
    }, pinnedCityWeather);
    return {
        type: 'PINNNED_CITY_CURRENT_WEATHER',
        payload
    };
};

export const fetchPinnedCityWeather = (cityInfo, zipcode) => {
    let weatherURLbyZip = `${weatherURL}/conditions/q/${zipcode}.json`;
    debugger;
    return dispatch => {
        return fetch(weatherURLbyZip)
            .then(response => response.json())
            .then(pinnedCityWeather => dispatch(receivePinnedCityWeather(pinnedCityWeather, cityInfo, zipcode)))
            .catch(err => console.log('an error occurred', err));
    };
};