import { connect } from 'react-redux';
import { fetchPinnedCityInfo } from '../actions';
import Settings from '../components/Settings';

const mapStateToProps = (state) => ({ pinnedCities: state.pinnedCityReducer });

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (zipcode) => {
      dispatch(fetchPinnedCityInfo(zipcode));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
