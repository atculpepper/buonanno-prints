import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// dependencies for custom material-ui styling
import { withStyles, createStyles } from '@material-ui/core/styles';

// material-ui components
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
// import classes from '*.module.css';

// // create custom material styling
const customStyles = (theme) =>
  createStyles({
    media: {
      height: '335px',
      backgroundSizing: 'cover',
    },
  });

class MoviesListItem extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  clickMovieDetails = (event, id) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    const { item, classes } = this.props;
    // console.log(item);

    return (
      <Card>
        <CardActionArea
          className='movieListItem'
          onClick={(event) => this.clickMovieDetails(event, item.id)}
        >
          <CardMedia
            image={item.poster}
            title={item.title}
            className={classes.media}
          />
          <CardContent>
            <Typography component='h3' variant='h4'>
              {item.title}
            </Typography>
            {/* <Typography component='h4'>{item.description}</Typography>
            <ul>
              {item.genre
                .filter((genreItemFilter) => genreItemFilter !== null)
                .map((genreItem, genreIndex) => (
                  <li key={genreIndex}>{genreItem}</li>
                ))}
            </ul> */}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

//component is getting returned from connect, withRouter, and withStyles

//1. connect gives access to dispatch and props.store with mapStoreToProps
//2. withRouter gives access to this.props.history
//3.w ithStyles gives access to this.props.customStyles
export default withStyles(customStyles)(
  withRouter(connect(mapStoreToProps)(MoviesListItem))
);
