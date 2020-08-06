const genresError = (state = [], action) => {
  switch (action.type) {
    case 'GENRES_ERROR':
      return [action.payload];
    case 'CLEAR_GENRES_ERROR':
      return [];
    default:
      return state;
  }
};

export default genresError;
