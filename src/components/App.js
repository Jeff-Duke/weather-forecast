import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchLocalWeather } from '../actions/index';
// import { Router, IndexRoute, Route, browserHistory, Link } from 'react-router';
// import { fetchWeatherByZip } from '../actions/index';

import Header from '../containers/Header';

class App extends Component {

    findLocalCoordinates() {
        if (!navigator.geolocation) {
            console.error('geolocation is not supported by your browser');
            return;
        }
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
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
