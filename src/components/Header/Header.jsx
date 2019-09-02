import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import HomeListItem from "../HomeListItem/HomeListItem";

class Header extends Component {
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
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>
                <h2>Movie Synopsis</h2>(Click movie posters for more details)
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.store.movieReducer.map(movie => {
              return <HomeListItem movie={movie} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Home);
