import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
  //retrieves details for movie with specified ID and saves in reducer
  getDetails() {
    this.props.dispatch({
      type: "FETCH_DETAILS",
      payload: this.props.movie.id
    });
  }

  getGenres() {
    this.props.dispatch({
      type: "FETCH_GENRES",
      payload: this.props.movie.id
    });
  }

  goToDetails = action => {
    this.getDetails();
    this.getGenres();
    this.props.history.push(`/details/${this.props.movie.id}`);
    console.log(`/details/{this.props.movie.id}`);
  };

  render() {
    return (
      <tr>
        <td>
          <h2>{this.props.movie.title}</h2>
        </td>
        <td>
          <img
            src={this.props.movie.poster}
            alt={this.props.movie.name}
            onClick={this.goToDetails}
          />
        </td>
        <td>
          <p>{this.props.movie.description}</p>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default withRouter(connect(mapStateToProps)(Home));
