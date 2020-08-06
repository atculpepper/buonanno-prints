import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieGenreItem from '../MovieGenreItem/MovieGenreItem';

class MovieGenresEditor extends Component {
  state = {
    selectedGenreId: 0,
  };

  componentDidMount() {
    // API call to load available genres
    // dispatching saga
    this.props.dispatch({
      type: 'GET_GENRES',
    });
  }

  changeSelectedGenre = (event) => {
    this.setState({
      selectedGenreId: event.target.value,
    });
  };

  clickAddGenre = (event) => {
    if (this.state.selectedGenreId === '' || this.state.selectedGenreId === 0) {
      alert('You must select a genre to add it.');
      return;
    }

    this.props.dispatch({
      type: 'POST_MOVIE_GENRE',
      payload: {
        movies_id: this.props.movieId,
        genres_id: this.state.selectedGenreId,
      },
    });
  };

  render() {
    return (
      <div>
        <h4>Movie Genre(s)</h4>
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
          {this.props.store.movieGenres.map((item, index) => (
            <MovieGenreItem key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(MovieGenresEditor);
