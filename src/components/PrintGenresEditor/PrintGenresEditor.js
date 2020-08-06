import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrintGenreItem from '../PrintGenreItem/PrintGenreItem';

class PrintGenresEditor extends Component {
  state = {
    selectedGenreId: 0,
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
      alert('You must select a genre to add it.');
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
