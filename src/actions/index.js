const defaultProperties = {
  localWeather: {},
  pinnedCities: []
};

export const fetchLocalWeather = (position) => {
  return {
    type: 'LOCAL_WEATHER',
    position: Object.assign(defaultProperties, {
      localLat: position.coords.latitude,
      localLong: position.coords.longitude}, position )
  }.then(console.log(defaultProperties));
};
