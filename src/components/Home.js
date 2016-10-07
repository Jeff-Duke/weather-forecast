import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory, Link } from 'react-router';

import CityCard from './CityCard';
import PinCard from './PinCard';


class Home extends Component {
  render() {
    return (
      <div>
      <section className="pinned-cities">
        <CityCard />
        <CityCard />
        <PinCard />
      </section>
      <Link
        to="/Settings"
        className="edit-cities">
        Edit Pinned Cities &#10163;
      </Link>
    </div>
    )
  }
}

export default Home;
