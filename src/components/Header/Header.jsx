import React, { Component } from "react";
import { connect } from "react-redux";
// import "../App/bootstrap.css";
import "./Header.css"

//Material UI Components

class Header extends Component {

  render() {

    return (
      <header className='Header'>
        <div className='row'>
            <div className="col-2">
            </div>
          <div className='col-8'>
            <h1 className='App-title'>Movie Library: <br />{this.props.title}</h1>
          </div>
          <div className='col-2'>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Header);
