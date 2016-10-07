import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory, Link } from 'react-router';
import { fetchWeatherByZip } from '../actions/index';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {
    weather: state.weather
  };
}

const mapDispatchToProps = (zip) => {

}

export default App;
