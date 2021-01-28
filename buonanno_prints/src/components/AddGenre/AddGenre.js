import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui components
import Button from '@material-ui/core/Button';

// custom material-ui styling dependencies
import { withStyles, createStyles } from '@material-ui/core/styles';

const customStyles = (theme) =>
  createStyles({
    button: {
      margin: '2em',
    },
  });

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
    const { classes } = this.props;
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
          className={classes.button}
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

export default withStyles(customStyles)(connect(mapStoreToProps)(AddGenre));
