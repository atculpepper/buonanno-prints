import { combineReducers } from 'redux';

// imports for individual reducers
import prints from './prints.reducer';
import genres from './genres.reducer';
import details from './details.reducer';
import printGenres from './printGenres.reducer';
import genresError from './genresError.reducer';
import user from './user.reducer';
import search from './search.reducer';

export default combineReducers({
  // REDUCERS ARE REGISTERED
  prints,
  genres,
  details,
  printGenres,
  genresError,
  user,
  search,
});
