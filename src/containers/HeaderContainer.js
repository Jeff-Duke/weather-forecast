import {
    connect
} from 'react-redux';
import Header from '../components/Header';

import {
    fetchLocalWeather
} from '../actions/index';

const mapStateToProps = (state) => ({ localWeatherReducer: state.localWeatherReducer});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadWeather(localWeather) {
            dispatch(fetchLocalWeather(localWeather));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
