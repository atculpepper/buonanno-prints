import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <button onClick={this.saveNewGenre}>Save</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddGenre);
