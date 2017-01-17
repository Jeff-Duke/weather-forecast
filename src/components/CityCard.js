import React, {Component} from 'react';
import {Link} from 'react-router';

export default class CityCard extends Component {

  render() {
    return (
      <section className="city-card">
        <article className="pinned-forecast-extended">
          <h1 className="city-title">{this.props.name}</h1>
          <img src={this.props.icon} alt="weather icon" />
          <ul className="city-list">
            <li className="city-li">Current temperature: {this.props.temp}</li>
            <li className="city-li">Current outlook: {this.props.condition}</li>
          </ul>
          <Link to={'/PinnedCityExtended/' + this.props.zipcode}
              className="pinned-link"
              >
              View Extended Forecast &#10163;
          </Link>
        </article>
      </section>
    );
  };
}
