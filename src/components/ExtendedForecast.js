import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExtendedForecast extends Component {
  render() {
    return (
      <section className="extended-container">
        5 day / 3 hour forecast for selected city
      </section>
    )
  }
}

export default ExtendedForecast;
