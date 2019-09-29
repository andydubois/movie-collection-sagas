import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import "./Details.css"

//Material UI Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
  //makes sure genre list reloads when refreshed
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

  //routes to edit page
  goToEditPage = action => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    //maps genreReducer to list all genres if movie has more than one.
    let genreList = this.props.store.genreReducer.map(genre => {
      return <li>{genre.name}</li>;
    });
    return (
      //react-transition adds transitions between pages
      <div className='detailContainer detailsBox react-transition swipe-right container'>
        <Header title={`"${this.props.store.detailsReducer.title}"`} />
        <Paper className='paper'>
          <Table className='detailContainer'>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    src={this.props.store.detailsReducer.poster}
                    alt={this.props.store.detailsReducer.title}
                  />
                </TableCell>
                <TableCell>
                  <h2>{this.props.store.detailsReducer.title}</h2>
                  {/*list genres of movie */}
                  <ul>{genreList}</ul>
                  <p>{this.props.store.detailsReducer.description}</p>
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={this.backToHomePage}>
                    Back to List
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={this.goToEditPage}>
                    Edit Details
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Details);
