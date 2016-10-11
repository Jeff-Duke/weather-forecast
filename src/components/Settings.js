import React from 'react';

const Settings = ({  onSubmit }) => {
  let input;
// console.log(pinnedCitiesArray);
    return (
      <section className="settings-menu">
        <h1 className="settings-title">Pinned Cities:</h1>
        {/* <ul className="settings-city">
          {pinnedCitiesArray.map(city => {
            return <li className="settings-li">{city.name}</li>
          })}
        </ul> */}
        <form
          className="add-city-container"
          onSubmit={ (e) => {
            e.preventDefault();
            onSubmit(input.value);
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
        </form>
      </section>
    )
  }

export default Settings;
