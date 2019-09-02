import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import HomeListItem from "../HomeListItem/HomeListItem";

//Material UI Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Home extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.dispatch({
      type: "FETCH_MOVIES"
    });
  }

  render() {
    return (
      <div className='react-transition swipe-left'>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>(Click movie posters for more details)</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.store.movieReducer.map(movie => {
                return <HomeListItem movie={movie} />;
              })}
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

export default connect(mapStateToProps)(Home);
