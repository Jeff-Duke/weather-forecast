import React, { Component } from 'react';
import { Link } from 'react-router';

import PinnedCity from '../containers/PinnedCityContainer';
import PinCard from './PinCard';


const Home = ({pinnedCityList}) => {
    return (
      <div>
      <section className="pinned-cities">
        
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
