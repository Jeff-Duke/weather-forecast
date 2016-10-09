export const fetchLocalWeather = (localWeather) => {
    console.log('The action feels that the local weather is', localWeather);
    return {
        type: 'LOCAL_WEATHER',
        localWeather: {temp: localWeather.main.temp, condition: localWeather.weather[0].main },
    };
};


//use redux-thunk to take the default lat and long and make an API call
//API call will update the localweather object in the state
