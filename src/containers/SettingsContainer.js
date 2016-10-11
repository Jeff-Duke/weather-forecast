import { connect } from 'react-redux';
import { fetchCityInfoByZip } from '../actions';
import Settings from '../components/Settings';

const mapStateToProps = (state) => ({ pinnedCitiesArray: state.pinnedCityReducer.pinnedCities });

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (zipcode) => {
      dispatch(fetchCityInfoByZip(zipcode));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
