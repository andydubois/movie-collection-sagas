import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from "../Home/Home"
import Details from "../Details/Details"

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
