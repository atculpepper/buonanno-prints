import React, { Component } from 'react';
import { connect } from 'react-redux';

//custom components
import PrintGenresEditor from '../PrintGenresEditor/PrintGenresEditor';
import Header from '../Header/Header';
import AddImage from '../AddImage/AddImage';

//material ui components
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {
  Grid,
  LinearProgress,
  Box,
  TextField,
  Typography,
} from '@material-ui/core';

class NewEntry extends Component {
  state = {
    title: '',
    description: '',
    url: '',
  };

  handleChange = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
    console.log(this.state);
  };

  clickCancel = (event) => {
    this.props.history.push(`/admin`);
  };

  saveInfo = (event) => {
    // dispatch to saga to make API call
    let newDetails = {
      ...this.state,
    };

    this.props.dispatch({
      type: 'POST_PRINT',
      payload: newDetails,
    });

    this.setState({
      title: '',
      description: '',
      url: '',
    });

    console.log('Clicked Add print');
    // navigate to the home page
    // this.props.history.push(`/home`);
  };

  render() {
    // if ({this.props.store.url}){
    //   defaultValue = {this.props.store.url}
    // }
    // else {
    //   defaultValue = {''}
    // }

    return (
      <div className='algnLeft'>
        <h3>Add Print</h3>
        <Box mb={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                type='text'
                placeholder='Title'
                onChange={this.handleChange('title')}
                fullWidth
                variant='outlined'
                label='Print Title'
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange('description')}
                fullWidth
                variant='outlined'
                label='Print Description'
                multiline
                required
              />
            </Grid>
            <Grid item xs={12}>
              <AddImage />
            </Grid>
            <Grid item xs={12}>
              <h3 style>Image Url</h3>
              <TextField
                onChange={this.handleChange('url')}
                defaultValue={this.props.store.url}
                fullWidth
                variant='outlined'
                // label='Image Url'//could this prop be removed onFinished load of image to AWS?
                multiline
                required
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          onClick={this.saveInfo}
          variant='outlined'
          color='inherit'
          size='large'
        >
          Add
        </Button>

        <Container maxWidth={false}></Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(NewEntry);
