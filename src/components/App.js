import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchLocalWeather } from '../actions/index';
// import { Router, IndexRoute, Route, browserHistory, Link } from 'react-router';
// import { fetchWeatherByZip } from '../actions/index';

import localWeather from '../actions/data/weather';

import Header from './Header';

class App extends Component {

    findLocalCoordinates() {
        if (!navigator.geolocation) {
            console.error('geolocation is not supported by your browser');
            return;
        }
        navigator.geolocation.getCurrentPosition(function(position) {
            fetchLocalWeather(localWeather);
        });
    }

    componentDidMount() {
        this.findLocalCoordinates();
    }

    render() {
        return (
            <div>
                <Header />
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default App;
