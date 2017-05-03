// @flow
import React, { Component } from 'react';
import Home from '../components/Home/Home';
import { connnect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
      <div>
        <button onClick={logout}>Log me out!</button>
      </div>
    );
  }
}

function logout() {

}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(HomePage);
