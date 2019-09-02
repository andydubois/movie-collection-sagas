import React, { Component } from "react";
import { connect } from "react-redux";

//Components

class Details extends Component {
  //   runs nested functions on page load
  componentDidMount() {
    this.getDetails();
    this.getGenres();
  }

  //makes sure details page will reload with information even when refreshed
  getDetails() {
    this.props.dispatch({
      type: "FETCH_DETAILS",
      payload: this.props.match.params.id
    });
  }

  getGenres() {
    this.props.dispatch({
      type: "FETCH_GENRES",
      payload: this.props.match.params.id
    });
  }

  //returns user to home page.  Used with onClick
  backToHomePage = action => {
    this.props.history.push("/");
  };

  goToEditPage = action => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    //maps genreReducer to list all genres if movie has more than one.
    let genreList = this.props.store.genreReducer.map(genre => {
      return <li>{genre.name}</li>;
    });
    return (
      <div className='react-transition swipe-right'>
        <h2>{this.props.store.detailsReducer.title}</h2>
        <ul>{genreList}</ul>
        <img
          src={this.props.store.detailsReducer.poster}
          alt={this.props.store.detailsReducer.name}
        />
        <p>{this.props.store.detailsReducer.description}</p>
        <button onClick={this.backToHomePage}>Back to List</button>
        <button onClick={this.goToEditPage}>Edit Details</button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Details);
