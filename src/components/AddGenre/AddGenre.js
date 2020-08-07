import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui components
import Button from '@material-ui/core/Button';

class AddGenre extends Component {
  state = {
    newGenre: '',
  };

  changeNewGenre = (event) => {
    this.setState({
      newGenre: event.target.value,
    });
  };

  saveNewGenre = (event) => {
    this.props.dispatch({
      type: 'POST_GENRE',
      payload: {
        name: this.state.newGenre,
      },
    });

    // clear form field
    this.setState({
      newGenre: '',
    });
  };

  render() {
    return (
      <div>
        <h3>Add Genre</h3>
        <input
          placeholder='Name of Genre'
          type='text'
          value={this.state.newGenre}
          onChange={this.changeNewGenre}
        />
        <Button
          size='small'
          color='default'
          variant='outlined'
          onClick={this.saveNewGenre}
        >
          Save
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddGenre);
