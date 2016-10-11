import React, {Component} from 'react';
import {Link} from 'react-router';

export default class CityCard extends Component {

    render() {
        return (
            <section className="city-card">
                <article className="pinned-forecast-extended">
                    <Link to="/ExtendedForecast" // add route to extended forecast for particular zipcode
                        className="pinned-link">
                        View Extended Forecast &#10163;
                    </Link>
                </article>
            </section>
        );
    };
}
