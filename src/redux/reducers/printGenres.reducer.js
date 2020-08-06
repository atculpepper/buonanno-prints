const printGenres = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRINT_GENRES':
      return action.payload;
    default:
      return state;
  }
};

export default printGenres;
