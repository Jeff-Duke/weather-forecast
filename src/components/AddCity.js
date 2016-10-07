import React from 'react';
import { Link } from 'react-router';

const AddCity = React.createClass({
  render() {
    return (
      <section className="add-city-container">
        <input
          type="number"
          className="add-zip-field"
          placeholder="Zip Code" />
        <button
          className="add-city-button">
          Pin New City
        </button>
      </section>
    );
  }
});

export default AddCity;
