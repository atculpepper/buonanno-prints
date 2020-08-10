import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddGenre from '../../AddGenre/AddGenre';
import AddImage from '../../AddImage/AddImage';
import GenresList from '../../GenresList/GenresList';
import LoginForm from '../../LoginForm/LoginForm';
import LogoutButton from '../../LogoutButton/LogoutButton';
import Header from '../../Header/Header';

//material ui components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// custom material-ui styling dependencies
import { withStyles, createStyles } from '@material-ui/core/styles';

const customStyles = (theme) =>
  createStyles({
    button: {
      marginTop: '2em',
    },
    link: {
      marginBottom: '2em',
    },
  });

class AdminPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USER',
    });
  }

  render() {
    const { classes } = this.props;

    let secureContent = (
      <div>
        {/* <Header /> */}
        <div>
          <LogoutButton style={{ margin: '2em' }} />
        </div>
        <AddImage />
        <AddGenre />
        <GenresList />
      </div>
    );

    if (this.props.store.user.id == null) {
      secureContent = <LoginForm />;
    }

    return (
      <div>
        <Header title={'Admin'} />
        <Container>
          <div>
            <h2>Admin</h2>
            <Link to='/' className={classes.link}>
              Home Page
            </Link>

            {secureContent}
          </div>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(connect(mapStoreToProps)(AdminPage));
