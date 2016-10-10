import fetch from 'isomorphic-fetch';

const apiKey = 'cbc43ed2ea5ef4a7aa9e8cf85994a583';

export const fetchLocalWeather = (localWeather) => {
    return {
        type: 'LOCAL_WEATHER',
        localWeather
    };
};

export const receiveCurrentWeatherByGPS = (json) => {
    return {
        type: 'CURRENT_LOCAL_WEATHER_GPS',
        currentLocalForecast: json
    };
};

export const receiveCurrentWeatherByZip = json => {
    console.log('receiveCurrentWeatherByZip called', json);
    return {
        type: 'CURRENT_LOCAL_WEATHER_ZIP',
        json
    };
};

export const fetchCurrentWeatherByGPS = (position) => {
    return (dispatch) => {
        let weatherURLbyGPS = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${apiKey}`;
        console.log('weatherbygps is about to dispatch');
        console.log('weatherbygps called');

        return fetch(weatherURLbyGPS)
            .then(response => response.json())
            .then(jsonResponse => dispatch(receiveCurrentWeatherByGPS(jsonResponse)));
    };
};

export const fetchCurrentWeatherByZip = (zipcode) => {
    let weatherURLbyZip = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${apiKey}`;
    return dispatch => fetch(weatherURLbyZip)
        .then(response => response.json())
        .then(jsonResponse => dispatch(receiveCurrentWeatherByZip(jsonResponse)));
};
