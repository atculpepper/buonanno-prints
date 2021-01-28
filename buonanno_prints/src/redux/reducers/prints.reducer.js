// Used to store movies returned from the server
const prints = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRINTS':
      return action.payload;
    default:
      return state;
  }
};

export default prints;
