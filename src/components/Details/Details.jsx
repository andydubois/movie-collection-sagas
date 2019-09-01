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
    return (
      <div>
        <h2>{this.props.store.detailsReducer.title}</h2>
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
