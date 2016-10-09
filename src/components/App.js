import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchCurrentWeatherByGPS } from '../actions/index';
// import { Router, IndexRoute, Route, browserHistory, Link } from 'react-router';
// import { fetchWeatherByZip } from '../actions/index';

import HeaderContainer from '../containers/HeaderContainer';

class App extends Component {

    findLocalCoordinates() {
        if (!navigator.geolocation) {
            console.error('geolocation is not supported by your browser');
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            fetchCurrentWeatherByGPS(position);
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

export default App;
