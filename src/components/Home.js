import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory, Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
      <Link to="/PinnedCities">
        <button>Edit Pinned Cities</button>
      </Link>
      {/* <Link to="/ExtendedForecast">
        <button>View Extended Forecast</button>
      </Link> */}
    </div>
    )
  }
}

export default Home
