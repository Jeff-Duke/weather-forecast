import React from 'react';
import { Link } from 'react-router';

import PinnedCity from '../containers/PinnedCityContainer';
import PinCard from './PinCard';


const Home = ({pinnedCityList}) => {
    return (
      <div>
      <section className="pinned-cities">
        {pinnedCityList.length > 0 ?
          pinnedCityList.map(pinnedCity =>
            <PinnedCity
              key={Date.now()}
              zipcode={pinnedCity.zipcode} />)
              : <PinCard />}
      </section>
      <Link
        to="/Settings"
        className="edit-cities">
        Edit Pinned Cities &#10163;
      </Link>
    </div>
    )
  }

export default Home;
