import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Header/Header';
import MovieGenresEditor from '../../MovieGenresEditor/MovieGenresEditor';
// import MovieSearch from '../../MovieSearch/MovieSearch';

//material ui components
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// custom material-ui styling dependencies
import { withStyles, createStyles } from '@material-ui/core/styles';

const customStyles = (theme) =>
  createStyles({
    poster: {
      width: '100%',
    },
  });

class DetailsPage extends Component {
  componentDidMount() {
    // dispatch to saga to call server API
    this.props.dispatch({
      type: 'GET_MOVIE',
      payload: this.props.match.params.id,
    });
    this.props.dispatch({
      type: 'GET_MOVIE_GENRES',
      payload: this.props.match.params.id,
    });
  }

  clickBackToList = (event) => {
    this.props.history.push('/');
  };

  clickEditMovie = (event) => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className='algnLeft'>
        <Header
          title={this.props.store.details.title}
          backHandler={this.clickBackToList}
        >
          <Button onClick={this.clickEditMovie} variant='contained'>
            Edit
          </Button>
        </Header>
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <img
                className={classes.poster}
                src={this.props.store.details.poster}
                alt={`${this.props.store.details.title}, movie poster`}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Typography component='h2' variant='h4' gutterBottom={true}>
                {this.props.store.details.title}
              </Typography>

              <Box mb={3}>
                <Typography component='p' variant='body1' gutterBottom={true}>
                  {this.props.store.details.description}
                </Typography>
              </Box>

              <MovieGenresEditor movieId={this.props.match.params.id} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(connect(mapStoreToProps)(DetailsPage));
