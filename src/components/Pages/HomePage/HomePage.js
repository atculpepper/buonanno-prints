import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieSearch from '../../MovieSearch/MovieSearch';

//components
import Header from '../../Header/Header.js';

import MoviesList from '../../MoviesList/MoviesList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header title={'Queer Movies'}>
          <MovieSearch />
        </Header>
        <MoviesList />
      </div>
    );
  }
}
// componentDidMount() {
//   //loads information coming in from server
//   this.props.dispatch({ type: 'GET_MOVIES' });

//   console.log('the component did in fact mount on MoviesList');
//   //sends out a call to the rootSaga in index.js, which will redirect the dispatch to a function that will communicate with the server
// }

// clickMovieDetails = (event, id) => {
//   this.props.history.push(`/details/${id}`);
// };

//   render() {
//     return (
//       <div>
//         <Header title='Movie Database' />
//         <h2>Movie Database</h2>
//         {this.props.store.movies.map((item, index) => (
//           <div
//             key={index}
//             className='movieListItem'
//             onClick={(event) => this.clickMovieDetails(event, item.id)}
//           >
//             <img src={item.poster} alt={item.title} />
//             <div>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//           </div>
//         ))}
//         {/* <MoviesList /> */}
//       </div>
//     );
//   }
// }

const mapStoreToProps = (store) => {
  return {
    store,
  };
};
export default connect(mapStoreToProps)(HomePage);
