import { connect } from 'react-redux';
import { fetchPinnedCityWeather, fetchPinnedCityExtended } from '../actions';
import Settings from '../components/Settings';

const mapStateToProps = (state) => ({ pinnedCities: state.pinnedCityReducer });

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (cityInfo, zipcode) => {
      dispatch(fetchPinnedCityWeather(cityInfo, zipcode));
      dispatch(fetchPinnedCityExtended(cityInfo, zipcode));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
