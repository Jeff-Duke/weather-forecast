import { connect } from 'react-redux';
import Header from '../components/Header';

import { fetchLocalWeather } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    localWeather: {
      temp: 75,
      condition: 'Sunny as hell yo'
    }
  };
};

const mapDispatchToProps=(dispatch) => {
  return {
    onLoadWeather(localWeather){
      console.log('Container hit!');
      dispatch(fetchLocalWeather(localWeather));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
