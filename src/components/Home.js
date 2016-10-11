import React from 'react';
import { Link } from 'react-router';

import CityCard from '../components/CityCard';
import PinCard from './PinCard';


const Home = ({pinnedCityList}) => {
    return (
      <div>
      <section className="pinned-cities">
        {pinnedCityList.length > 0 ?
          pinnedCityList.map(pinnedCity =>
            <CityCard
              key={pinnedCity.id}
              zipcode={pinnedCity.zipcode}
              name={pinnedCity.city}
              temp={Math.round(pinnedCity.main.temp)}
              condition={pinnedCity.weather[0].main}
              />)
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
