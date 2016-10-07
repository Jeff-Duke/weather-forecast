//Actions

import fetch from 'isomorphic-fetch';
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const REQUEST_FORECAST = 'REQUEST_FORECAST';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b248d23bebc3f14165312ce58845f0c4'

// export function fetchWeatherByZip(zip) {
//   return dispatch => {
//     dispatch({ type: REQUEST_FORECAST });
//     return fetch(API_URL.replace(/zip/, zip))
//       .then(req => req.json())
//       .then(json => dispatch({
//         type: RECEIVE_FORECAST,
//         json
//       }));
//   };
// }

// export const receiveForecast = (forecastData) => ({
//   // action object
// })
//
// export const fetchForecast = options => dispatch => {
//   // return fetch API call
// }

// hardcode some cities before worrying about API data
export function fetchWeatherByZip() {
  console.log("in fetchWeatherByZip function");
  return {
    type: RECEIVE_FORECAST,
    data: [{city: 'Minneapolis', temp: 100, lat: 50}, {city: 'Paris', temp: 100, lat: 50} ]
  };
}
