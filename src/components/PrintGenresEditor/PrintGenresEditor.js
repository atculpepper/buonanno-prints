import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrintGenreItem from '../PrintGenreItem/PrintGenreItem';

// material-ui custom styling dependencies
import { withStyles, createStyles } from '@material-ui/core/styles';
// material-ui components
import {
  Paper,
  IconButton,
  Modal,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { AddCircle } from '@material-ui/icons';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const customStyles = (theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    pillList: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0, 0.5, 0.5, 0),
      },
      margin: 0,
      padding: theme.spacing(0, 0, 1, 0),
      listStyle: 'none',
    },
    modalContent: {
      width: '350px',
      height: '200px',
      top: `50%`,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'fixed',
      padding: theme.spacing(2, 3, 3),
    },
    formControl: {
      minWidth: 120,
    },
  });

class PrintGenresEditor extends Component {
  state = {
    selectedGenreId: 0,
    isAddGenreModalOpen: false,
    isMessageOpen: false,
  };

  componentDidMount() {
    // API call to load available genres
    // dispatching saga
    this.props.dispatch({
      type: 'GET_GENRES',
    });
    console.log(this.props.printId);
  }

  changeSelectedGenre = (event) => {
    this.setState({
      selectedGenreId: event.target.value,
    });
  };

  clickAddGenre = (event) => {
    if (this.state.selectedGenreId === '' || this.state.selectedGenreId === 0) {
      alert('You must select an option to add it.');
      return;
    }

    this.props.dispatch({
      type: 'POST_PRINT_GENRE',
      payload: {
        prints_id: this.props.printId,
        genres_id: this.state.selectedGenreId,
      },
    });
  };

  render() {
    return (
      <div>
        <h4>Genre(s)</h4>
        <div>
          <select onChange={this.changeSelectedGenre}>
            <option value=''>Select a Genre</option>
            {this.props.store.genres.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <button onClick={this.clickAddGenre}>Add Genre</button>
        </div>

        <ul>
          {this.props.store.printGenres.map((item, index) => (
            <PrintGenreItem key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(PrintGenresEditor);
