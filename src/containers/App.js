import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory, Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
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

export default App
