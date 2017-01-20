const apiKey = '9b9ce697dc74009c';
const weatherURL = `https://api.wunderground.com/api/${apiKey}`;

export const fetchLocationByZip = (zipcode) => {
  let zipURL = `http://ZiptasticAPI.com/${zipcode}`;
  return fetch(zipURL)
    .then(response => response.json());
};

export const fetchLocationByPosition = (position) => {
  let geoLocationURL = `${weatherURL}/geolookup/q/${position.coords.latitude},${position.coords.longitude}.json`;
  return fetch(geoLocationURL)
    .then(response => response.json());
};
