import fetch from 'isomorphic-fetch';

const apiKey = '9b9ce697dc74009c';
const weatherURL = `https://api.wunderground.com/api/${apiKey}`;

export const receiveCurrentWeatherByGPS = (weatherInfo) => {
    return {
        type: 'CURRENT_LOCAL_WEATHER_GPS',
        currentLocalForecast: weatherInfo
    };
};

export const receiveCurrentExtendedForecast = (geoLocation, weatherInfo) => {
    let payload = Object.assign(geoLocation.location, weatherInfo.forecast.txt_forecast);
    return {
        type: 'CURRENT_EXTENDED_FORECAST',
        extendedForecast: payload
    };
};

export const fetchMyLocation = (position, weatherInfo, method) => {
    let geoLocationURL = `${weatherURL}/geolookup/q/${position.coords.latitude},${position.coords.longitude}.json`;
    return dispatch => {
        fetch(geoLocationURL)
            .then(response => response.json())
            .then(geoLocation => dispatch(method(geoLocation, weatherInfo)));
    };
}

export const fetchCurrentWeatherByGPS = (position) => {
    let weatherURLbyGPS = `${weatherURL}/conditions/q/${position.coords.latitude},${position.coords.longitude}.json`;

    return dispatch => {
        return fetch(weatherURLbyGPS)
            .then(response => response.json())
            .then(jsonResponse => dispatch(receiveCurrentWeatherByGPS(jsonResponse)));
    };
};

export const fetchLocalExtendedForecast = (position) => {
    let weatherURLExtendedForecast = `${weatherURL}/forecast/q/${position.coords.latitude},${position.coords.longitude}.json`;

    return dispatch => {
        return fetch(weatherURLExtendedForecast)
            .then(response => response.json())
            .then(weatherInfo => dispatch(fetchMyLocation(position, weatherInfo, receiveCurrentExtendedForecast)));
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
