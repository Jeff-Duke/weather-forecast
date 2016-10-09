import fetch from 'isomorphic-fetch';

export const fetchLocalWeather = (localWeather) => {
    return {
        type: 'LOCAL_WEATHER',
        localWeather
    };
};

export const receiveGPSWeather = (json) => {
    console.log('recieveGPSWeather dispatched', json);
    return {
        type: 'GPS_LOCAL_WEATHER',
        json
    };
};

export const fetchWeatherByGPS = (position) => {
    const apiKey = 'cbc43ed2ea5ef4a7aa9e8cf85994a583';
    let weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${apiKey}`;
    return fetch(weatherURL)
        .then(response => response.json())
        .then(jsonResponse => receiveGPSWeather(jsonResponse));
};
