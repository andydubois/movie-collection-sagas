import React, { Component } from "react";
import { connect } from "react-redux";

//Components

class Details extends Component {
//   componentDidMount() {
//     this.getDetails();
//   }

//   getDetails() {
//     this.props.dispatch({
//       type: "FETCH_DETAILS",
//       payload: this.props.params.id
//     });
//   }

  render() {
              let genreList= this.props.store.genreReducer.map((genre) => {
                  return (
                      <li>
                          {genre.name}
                      </li>
                  )
              })
    return (


      <div>
        <h2>{this.props.store.detailsReducer.title}</h2>
        <ul>
            {genreList}
        </ul>
        <img
          src={this.props.store.detailsReducer.poster}
          alt={this.props.store.detailsReducer.name}
        />
        <p>{this.props.store.detailsReducer.description}</p>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(Details);
