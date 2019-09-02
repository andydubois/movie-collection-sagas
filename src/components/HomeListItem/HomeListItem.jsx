import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Material UI Components
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/Info";

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
      <GridListTile key={this.props.movie.name}>
        <img
          src={this.props.movie.poster}
          alt={this.props.movie.title}
        />
        <GridListTileBar
        //   title={this.props.movie.title}
          subtitle={<span>{this.props.movie.title}</span>}
          actionIcon={
            <IconButton
              aria-label={`info about ${this.props.movie.title}`}
              className="icon">
              <Info className="icon" onClick={this.goToDetails}/>
            </IconButton>
          }
        />
      </GridListTile>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default withRouter(connect(mapStateToProps)(Home));
