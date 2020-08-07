import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui components
import Button from '@material-ui/core/Button';

class LogoutButton extends Component {
  clickLogout = (event) => {
    this.props.dispatch({
      type: 'LOGOUT',
    });
  };

  render() {
    return (
      <Button variant='outlined' size='small' onClick={this.clickLogout}>
        Logout
      </Button>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(LogoutButton);
