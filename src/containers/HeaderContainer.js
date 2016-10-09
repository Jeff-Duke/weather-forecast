import {
    connect
} from 'react-redux';
import Header from '../components/Header';

import {
    fetchLocalWeather
} from '../actions/index';

import localWeather from '../actions/data/weather';

const mapStateToProps = (state) => {
    if (state.localWeatherReducer.length > 0) {
        return {
            localWeather: state.localWeatherReducer[state.localWeatherReducer.length - 1].localWeather
        };
    } else {
        return {
            localWeather: localWeather
        };
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadWeather(localWeather) {
            dispatch(fetchLocalWeather(localWeather));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
