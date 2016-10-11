import { connect } from 'react-redux';
import PinnedCityExtended from '../components/PinnedCityExtended';

const mapStateToProps = (state, ownProps) => {
  let zipcode = ownProps.params.zip;
  let myWeather = state.pinnedCityReducer.find(city => zipcode === city.zipcode);
  return {
    weatherInfo: myWeather,
    zipcode
  };
};



export default connect(mapStateToProps)(PinnedCityExtended);
