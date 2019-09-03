import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./bootstrap.css";
import "./react-transitions.css";
import "./App.css";

//COMPONENTS
import Home from "../Home/Home";
import Details from "../Details/Details";
import EditPage from "../EditPage/EditPage";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className='app movieGrid'>
        <Router className='app'>
            <div className='transition-container'>
              <Route exact path='/' component={Home} />
              <Route path='/details/:id' component={Details} />
              <Route path='/edit/:id' component={EditPage} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
