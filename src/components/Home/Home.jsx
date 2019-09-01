import React, {Component} from "react";
import {connect} from "react-redux";

//Components
import HomeListItem from "../HomeListItem/HomeListItem"

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
                {this.props.store.movieReducer.map((movie) => {
                    return (
                        <HomeListItem movie={movie}/>
                    );
                })}
            </div>
        )
    }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Home);