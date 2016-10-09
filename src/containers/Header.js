import { connect } from 'react-redux';
import Header from '../components/Header';

import { fetchLocalWeather } from '../actions/index';

import localWeather from '../actions/data/weather';

const mapStateToProps = (state) => {
  return {
    localWeather: localWeather
  };
};

const mapDispatchToProps=(dispatch) => {
  return {
    onLoadWeather(localWeather){
      dispatch(fetchLocalWeather(localWeather));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
