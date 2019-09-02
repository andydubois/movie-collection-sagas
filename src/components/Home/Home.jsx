import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.css"

//Components
import HomeListItem from "../HomeListItem/HomeListItem";

//Material UI Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import ListSubheader from "@material-ui/core/ListSubheader";

class Home extends Component {
  componentDidMount() {
    //refreshes movie data every time page is loaded
    this.getMovies();
  }
  //Retrieves movie data from database
  getMovies() {
    this.props.dispatch({
      type: "FETCH_MOVIES"
    });
  }

  render() {

    return (
      <div>
        <div className="gridContainer">
          <GridList cellHeight={180} className="gridList">
            <GridListTile key='Subheader' cols={2} style={{ height: "auto" }}>
              <ListSubheader component='div'>Movie List</ListSubheader>
            </GridListTile>
            {this.props.store.movieReducer.map(movie => {
              return <HomeListItem movie={movie}/>;
            })}
          </GridList>
        </div>
      </div>

      // {/* <div className='react-transition swipe-left'> */}
      //         <Paper>
      //           <Table>
      //             <TableHead>
      //               <TableRow>
      //                 <TableCell>(Click movie posters for more details)</TableCell>
      //                 <TableCell></TableCell>
      //               </TableRow>
      //             </TableHead>
      //             <TableBody>
      //               {this.props.store.movieReducer.map(movie => {
      //                 return <HomeListItem movie={movie} />;
      //               })}
      //             </TableBody>
      //           </Table>
      //         </Paper>
      //       </div>
      //     );
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Home);
