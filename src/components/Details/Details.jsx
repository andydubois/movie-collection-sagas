import React, { Component } from "react";
import { connect } from "react-redux";

//Components

class Details extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getDetails() {
    this.props.dispatch({
      type: "FETCH_DETAILS"
    });
  }

  render() {
    return (
      <div>
        {this.props.store.detailsReducer.map(details => {
          return (
            <div>
              <h2>{this.props.movie.title}</h2>
              <img
                src={this.props.movie.poster}
                alt={this.props.movie.name}
                onClick={this.goToDetails}
              />
              <p>{this.props.movie.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Details);
