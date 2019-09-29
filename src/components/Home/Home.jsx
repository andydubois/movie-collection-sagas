import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.css";
import Header from "../Header/Header";

//Components
import HomeListItem from "../HomeListItem/HomeListItem";

//Material UI Components
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Info from "@material-ui/icons/Info";

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
    console.log(this.props.store);
    return (
      <div className='react-transition swipe-right container movieGrid'>
        <Header title={"Home Page"} />
        <div className='gridContainer'>
          <GridList cellHeight={180} className='gridList listHeader'>
            <GridListTile key='Subheader' cols={2} style={{ height: "auto" }}>
              <h6>Click <Info /> for more info</h6>
            </GridListTile>
            {this.props.store.movieReducer.map(movie => {
              return <HomeListItem movie={movie} />;
            })}
          </GridList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Home);
