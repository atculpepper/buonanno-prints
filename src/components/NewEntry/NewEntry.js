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

class NewEntry extends Component {
  state = {
    title: '',
    description: '',
  };

  addTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  addDescription = (event) => {
    this.setState({
      description: event.target.value,
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
      title: '',
      description: '',
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h3>New Entry</h3>
        <input
          placeholder='Title'
          type='text'
          value={this.state.title}
          onChange={this.addTitle}
        />
        <input
          placeholder='Description'
          type='text'
          value={this.state.description}
          onChange={this.addTitle}
        />
        <Button
          className={classes.button}
          size='small'
          color='default'
          variant='outlined'
          //   onClick={this.saveNewGenre}
        >
          Add
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(connect(mapStoreToProps)(NewEntry));
