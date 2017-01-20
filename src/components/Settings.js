import React from 'react';
import { Link } from 'react-router';
import { fetchLocationByZip } from '../helpers';

const Settings = ({ pinnedCities, onSubmit }) => {
  let input;
    return (
      <section className="settings-menu">
        <h1 className="settings-title">Pinned Cities:</h1>
        <ul className="settings-city">
          {pinnedCities ?
              pinnedCities.map(city => <li key={ Math.random() }>{city.city}</li>)
            : <li>Enter a zip code below</li>}
        </ul>
        <form
          className="add-city-container"
          onSubmit={ (e) => {
            e.preventDefault();
            const zipcode = input.value;
            fetchLocationByZip(zipcode)
            .then(cityInfo => onSubmit(cityInfo, zipcode));
            input.value=('');
          }}
        >
          <input
            ref={ node => { input = node }}
            type="number"
            className="add-zip-field"
            placeholder="Zip Code" />
          <button
            className="add-city-button">
            Pin New City
          </button>
          <Link to="/" className="header">
              <h1 className="main-title">VIEW PINS</h1>
          </Link>
        </form>
      </section>
    )
  }



export default Settings;
