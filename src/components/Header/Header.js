import React, { Component } from 'react';

//custom styling imports
import { withStyles, createStyles } from '@material-ui/core';
import { logo } from './alice.jpg';

//material-ui components
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Link from '@material-ui/core/Link';

const customStyles = (theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'left',
      margin: `0 0 30px`,
      position: 'static',
      background: 'black',
    },
    title: { flexGrow: 2 },
    primaryHeading: {
      display: 'inline-block',
      marginRight: '0.8rem',
    },
    backButton: {
      fill: 'white',
    },
    logo: {
      width: '2em',
      height: '2em',
    },
  });

class Header extends Component {
  render() {
    const { classes } = this.props;
    let backArrowContent = null;

    if (this.props.backHandler != null) {
      backArrowContent = (
        <IconButton
          // className={classes.backButton}
          onClick={this.props.backHandler}
        >
          <ArrowBackIos className={classes.backButton} fontSize='large' />
        </IconButton>
      );
    }
    return (
      <div className={classes.root}>
        <AppBar
          className={classes.root}
          // title={logo}
          // iconElementLeft={<img src={logo} alt='logo' />}
        >
          <Toolbar>
            {backArrowContent}
            {/* <img
              alt='glow rainbow logo'
              src={logo}
              className={classes.logo}
            ></img> */}

            <div className={classes.title}>
              <Typography
                variant='h4'
                component='h1'
                className={classes.primaryHeading}
                color='inherit'
              >
                {this.props.title}
              </Typography>
              <Link underline='none' color='inherit' href='#/admin'>
                Admin Page
              </Link>
            </div>

            <div>{this.props.children}</div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(customStyles)(Header);
