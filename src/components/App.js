import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCurrentLocalWeather, fetchLocalExtendedForecast } from '../actions/index';
import { fetchLocationByPosition } from '../helpers';

import HeaderContainer from '../containers/HeaderContainer';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCurrentLocalWeather, fetchLocalExtendedForecast  }, dispatch);
};

class App extends Component {

    findLocalCoordinates() {
        if (!navigator.geolocation) {
            console.error('geolocation is not supported by your browser');
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            fetchLocationByPosition(position)
            .then((cityInfo) => {
                this.props.fetchCurrentLocalWeather(cityInfo);
                this.props.fetchLocalExtendedForecast(cityInfo);
            })
            .catch(err => console.log(err));
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


