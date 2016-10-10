const localWeatherReducer = (state = {}, action) => {
    switch (action.type) {

        case 'LOCAL_WEATHER':
            return Object.assign({}, state, action.localWeather);

        case 'CURRENT_LOCAL_WEATHER_GPS':
            return Object.assign({}, state, action.currentLocalForecast);

        default:
            return state;
    }
};

export default localWeatherReducer;
