import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory, Link } from 'react-router';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <h1 className="title">Weather Tracker</h1> */}
        <Link to="/">
          <button>Go Home</button>
        </Link>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   // return an object of redux store data
//   // that you'd like available in your component
//   return {};
// }

export default App;
