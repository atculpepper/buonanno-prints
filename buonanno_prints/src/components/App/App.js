import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

//page components
import HomePage from '../Pages/HomePage/HomePage';
import DetailsPage from '../Pages/DetailsPage/DetailsPage';
import EditPage from '../Pages/EditPage/EditPage';
import AdminPage from '../Pages/AdminPage/AdminPage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={HomePage} />
          <Route path='/details/:id' component={DetailsPage} />
          <Route path='/edit/:id' component={EditPage} />
          <Route path='/admin' component={AdminPage} />
        </Router>
      </div>
    );
  }
}

export default App;
