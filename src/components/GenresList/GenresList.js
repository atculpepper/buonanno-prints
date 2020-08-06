import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenresListItem from '../GenresListItem/GenresListItem';

class GenresList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GENRES',
    });
  }

  render() {
    let errorMessage = null;

    if (this.props.store.genresError.length > 0) {
      errorMessage = this.props.store.genresError[0];
    }

    return (
      <div>
        <h3>Available Genres</h3>
        {errorMessage}
        <ul>
          {this.props.store.genres.map((item, index) => (
            <GenresListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(GenresList);
