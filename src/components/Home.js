import React from 'react';
import { Link } from 'react-router';

import PinnedCity from '../containers/PinnedCityContainer';
import PinCard from './PinCard';


const Home = ({pinnedCityList}) => {
    return (
      <div>
      <section className="pinned-cities">
        {/* // map through pinnedCitiesArray [zipCodes]
        // get length of this array
        {pinnedCitiesArray.map(city => {
          return <PinnedCity />
        })}

        // {Object.keys(pinnedCityReducer).length > 0 ?
              <PinnedCity {zipcode} />
              : <PinCard />}
        */}
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

export default Home;
