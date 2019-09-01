import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import HomeListItem from "../HomeListItem/HomeListItem";

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
      <table>
        <thead>
          <tr>
              <th></th>
              <th>Click for more details</th>
              <th>Movie Synopsis</th>
          </tr>
        </thead>
        <tbody>
          {this.props.store.movieReducer.map(movie => {
            return <HomeListItem movie={movie} />;
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Home);
