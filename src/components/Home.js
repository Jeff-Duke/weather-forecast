import React from 'react';
import { Link } from 'react-router';

import CityCard from '../components/CityCard';
import PinCard from './PinCard';

const Home = ({pinnedCityList}) => {

    return (
      <div>
      <section className="pinned-cities">
        {pinnedCityList.length ?
          pinnedCityList.map((pinnedCity) =>
            <CityCard
              key={pinnedCity.id}
              zipcode={pinnedCity.zipcode}
              name={pinnedCity.current_observation.display_location.full}
              temp={Math.round(pinnedCity.current_observation.temp_f)}
              condition={pinnedCity.current_observation.weather}
              icon={pinnedCity.current_observation.icon_url}
              />)
              : <PinCard />}
            <PinCard />
      </section>
      <Link
        to="/Settings"
        className="edit-cities"
        >
        Edit Pinned Cities &#10163;
      </Link>
    </div>
    )
  }

export default Home;
