import React, {Component} from 'react';
import {Link} from 'react-router';

export default class CityCard extends Component {
    render() {
        return (
            <section className="city-card">
                <article className="pinned-forecast-extended">
                    <h1>{this.props.name}</h1>
                    <p>Current temperature: {this.props.temp}</p>
                    <p>Current outlook: {this.props.condition}</p>
                    <br/>
                    <br/>
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
