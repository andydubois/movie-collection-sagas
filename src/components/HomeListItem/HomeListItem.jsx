import React, {Component} from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";


class Home extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.props.dispatch({
            type: "FETCH_MOVIES"
        })
    }




    render () {
        return (
            <div>
              <h2>{this.props.movie.title}</h2>
              <img src={this.props.movie.poster} />
              <p>{this.props.movie.description}</p>
            </div>
        );
    }
}


const mapStateToProps = store => ({
  store
});

export default withRouter(connect(mapStateToProps)(Home));