import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCurrentWeatherByGPS } from '../actions/index';
// import { Router, IndexRoute, Route, browserHistory, Link } from 'react-router';
// import { fetchWeatherByZip } from '../actions/index';

import HeaderContainer from '../containers/HeaderContainer';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCurrentWeatherByGPS}, dispatch);
};

class App extends Component {

    findLocalCoordinates() {
        if (!navigator.geolocation) {
            console.error('geolocation is not supported by your browser');
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            this.props.fetchCurrentWeatherByGPS(position);
        });
    }

    componentDidMount() {
        this.findLocalCoordinates();
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
