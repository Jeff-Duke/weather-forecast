import React from 'react';
import { Link } from 'react-router';


const PinCard = React.createClass({
  render() {
    return (
      <section className="pin-card">
      <Link
        to="/Settings"
        className="edit-cities">
        <h1 className="pin-title">&#43; Pin a new city</h1>
      </Link>

      </section>
    );
  }
});

export default PinCard;
