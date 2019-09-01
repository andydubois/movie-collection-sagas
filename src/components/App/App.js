import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from "../Home/Home"

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
