import React, { Component } from "react";
import { connect } from "react-redux";

//Components

class EditPage extends Component {
  render() {
    return <p>Edit page!</p>;
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(EditPage);
