import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGenreItem extends Component {
  clickDeleteGenre = (event) => {
    // dispatch to a saga for deleting genre from database
    this.props.dispatch({
      type: 'DELETE_MOVIE_GENRE',
      payload: {
        movieGenreId: this.props.item.id,
        movieId: this.props.item.movies_id,
      },
    });
  };

  render() {
    const { item } = this.props;
    return (
      <li>
        {item.name} <button onClick={this.clickDeleteGenre}>Delete</button>
      </li>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(MovieGenreItem);
