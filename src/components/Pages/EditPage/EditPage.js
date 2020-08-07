import React, { Component } from 'react';
import { connect } from 'react-redux';

//custom components
import PrintGenresEditor from '../../PrintGenresEditor/PrintGenresEditor';
import Header from '../../Header/Header';

//material ui components
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Grid, LinearProgress, Box, TextField } from '@material-ui/core';

class EditPage extends Component {
  state = {
    title: '',
    description: '',
  };

  componentDidMount() {
    // dispatch to saga to call server API
    this.props.dispatch({
      type: 'GET_PRINT',
      payload: this.props.match.params.id,
    });
    this.props.dispatch({
      type: 'GET_PRINT_GENRES',
      payload: this.props.match.params.id,
    });
  }

  changePrintDetails = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  clickCancel = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  clickSavePrintDetails = (event) => {
    // dispatch to saga to make API call
    let newDetails = {
      ...this.state,
      id: this.props.match.params.id,
    };

    if (newDetails.title == null || newDetails.title === '') {
      newDetails.title = this.props.store.details.title;
    }

    if (newDetails.description == null || newDetails.description === '') {
      newDetails.description = this.props.store.details.description;
    }

    this.props.dispatch({
      type: 'PUT_PRINT',
      payload: newDetails,
    });
    // navigate to the details page
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    let printForm = <LinearProgress />;

    if (
      this.props.match.params.id != null &&
      this.props.store.details.title != null &&
      this.props.store.details.description != null
    ) {
      printForm = (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              type='text'
              placeholder='New Title'
              onChange={this.changePrintDetails('title')}
              defaultValue={this.props.store.details.title}
              fullWidth
              variant='outlined'
              label='Print Title'
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={this.changePrintDetails('description')}
              defaultValue={this.props.store.details.description}
              fullWidth
              variant='outlined'
              label='Print Description'
              multiline
              required
            />
          </Grid>
        </Grid>
      );
    }
    return (
      <div className='algnLeft'>
        <Header title='Edit' backHandler={this.clickCancel}>
          <Button
            onClick={this.clickSavePrintDetails}
            variant='outlined'
            color='inherit'
            size='large'
          >
            Save
          </Button>
        </Header>

        <Container maxWidth={false}>
          <Box mb={4}>{printForm}</Box>

          <PrintGenresEditor printId={this.props.match.params.id} />
        </Container>
      </div>
    );
  }
}

//     return (
//       <div className='algnLeft'>
//         <Header title='Edit' backHandler={this.clickCancel}>
//           <Button onClick={this.clickEditMovie} variant='contained'>
//             Edit
//           </Button>
//           <Button onClick={this.clickSaveMovieDetails} variant='contained'>
//             Save
//           </Button>
//         </Header>
//         <Container>
//           <h1>Edit</h1>
//           <div>
//             <Button onClick={this.clickCancel} variant='contained'>
//               Cancel
//             </Button>
//           </div>
//           <div>
//             <div>
//               <input
//                 type='text'
//                 placeholder='New Title'
//                 onChange={this.changeMovieDetails('title')}
//                 defaultValue={this.props.store.details.title}
//               />
//             </div>
//             <div>
//               <textarea
//                 onChange={this.changeMovieDetails('description')}
//                 defaultValue={this.props.store.details.description}
//               ></textarea>
//             </div>
//           </div>
//           <PrintGenresEditor printId={this.props.match.params.id} />
//         </Container>
//       </div>
//     );
//   }
// }

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
