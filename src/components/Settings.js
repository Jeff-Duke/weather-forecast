import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCity from './AddCity';

class Settings extends Component {
  render() {
    return (
      <section className="settings-menu">
        <h1 className="settings-title">Pinned Cities:</h1>
        <ul className="settings-city">
          <li className="settings-li"><span className="redX">&#88;</span> City Name</li>
          <li className="settings-li"><span className="redX">&#88;</span> City Name</li>
          <li className="settings-li"><span className="redX">&#88;</span> City Name</li>
        </ul>
        <AddCity />
      </section>
    )
  }
}

export default Settings;
