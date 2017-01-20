import { connect } from 'react-redux';
import { fetchPinnedCityCurrentWeather, fetchPinnedCityExtendedForecast } from '../actions';
import Settings from '../components/Settings';

const mapStateToProps = (state) => ({ pinnedCities: state.pinnedCityReducer });

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (cityInfo, zipcode) => {
      dispatch(fetchPinnedCityCurrentWeather(cityInfo, zipcode));
      dispatch(fetchPinnedCityExtendedForecast(cityInfo, zipcode));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
