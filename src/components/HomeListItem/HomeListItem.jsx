import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Material UI Components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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
      <TableRow>
        {/* <TableCell>
          <h2>{this.props.movie.title}</h2>
        </TableCell> */}
        <TableCell>
          <h2>{this.props.movie.title}</h2>
          <img
            src={this.props.movie.poster}
            alt={this.props.movie.name}
            onClick={this.goToDetails}
          />
        </TableCell>
        <TableCell>
          <p>{this.props.movie.description}</p>
        </TableCell>
      </TableRow>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default withRouter(connect(mapStateToProps)(Home));
