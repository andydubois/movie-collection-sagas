import React, { Component } from "react";
import { connect } from "react-redux";

//Material UI Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <h2>{this.props.store.detailsReducer.title}</h2>
                <ul>{genreList}</ul>
                <img
                  src={this.props.store.detailsReducer.poster}
                  alt={this.props.store.detailsReducer.title}
                />
              </TableCell>
              <TableCell>
                <p>{this.props.store.detailsReducer.description}</p>
                <button onClick={this.backToHomePage}>Back to List</button>
                <button onClick={this.goToEditPage}>Edit Details</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Details);
