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
        {this.props.store.detailsReducer.map(details => {
          return (
            <div>
              <h2>{details.title}</h2>
              <h4>{details.name}</h4>
              <img src={details.poster} alt={details.name} />
              <p>{details.description}</p>
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
