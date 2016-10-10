import React from 'react';
import { bindActionCreators } from 'redux';

// import AddCity from './AddCity';

const Settings = ({ pinnedCitiesArray, onSubmit }) => {
  let input;
console.log(onSubmit, pinnedCitiesArray);
    return (
      <section className="settings-menu">
        <h1 className="settings-title">Pinned Cities:</h1>
        <ul className="settings-city">
          <li className="settings-li">City Name</li>
          <li className="settings-li">City Name</li>
          <li className="settings-li">City Name</li>
        </ul>
        <form
          className="add-city-container"
          onSubmit={ (e) => {
            e.preventDefault();
            this.props.onSubmit(input.value);
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
        </form>
      </section>
    )
  }

export default Settings;
