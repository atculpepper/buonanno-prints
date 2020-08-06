import { combineReducers } from 'redux';

// imports for individual reducers
import movies from './movies.reducer';
import genres from './genres.reducer';
import details from './details.reducer';
import movieGenres from './movieGenres.reducer';
import genresError from './genresError.reducer';
import user from './user.reducer';
import search from './search.reducer';

export default combineReducers({
  // REDUCERS ARE REGISTERED
  movies,
  genres,
  details,
  movieGenres,
  genresError,
  user,
  search,
});
