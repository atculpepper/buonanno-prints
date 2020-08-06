import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogoutButton extends Component {
  clickLogout = (event) => {
    this.props.dispatch({
      type: 'LOGOUT',
    });
  };

  render() {
    return <button onClick={this.clickLogout}>Logout</button>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(LogoutButton);
