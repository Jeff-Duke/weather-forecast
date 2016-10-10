import React, { Component } from 'react';
import { Link } from 'react-router';

import PinnedCity from '../containers/PinnedCityContainer';
import PinCard from './PinCard';


class Home extends Component {
  render() {
    return (
      <div>
      <section className="pinned-cities">
        <PinnedCity />
        <PinnedCity />
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
