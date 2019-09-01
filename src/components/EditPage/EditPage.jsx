import React, { Component } from "react";
import { connect } from "react-redux";

//Material UI Components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class EditPage extends Component {
  //storing title and description of selected movie as state
  state = {
    title: this.props.store.detailsReducer.title,
    description: this.props.store.detailsReducer.description
  };

  //   runs nested functions on page load
  componentDidMount() {
    console.log(this.state);
    this.getDetails();
  }

  //makes sure details page will reload with information even when refreshed
  getDetails() {
    this.props.dispatch({
      type: "FETCH_DETAILS",
      payload: this.props.match.params.id
    });
  }

  //change handler for properties in state
  handleChange = (property, event) => {
    this.setState({
      ...this.state,
      [property]: event.target.value
    });
    console.log(this.state.title, this.state.description);
  };

  returnToDetailPage = action => {
      this.props.history.push(`/details/${this.props.match.params.id}`);
  }

  render() {
    return (
      <div>
        <p>Edit time</p>
        <form>
          <TextField
            label='Edit movie title'
            defaultValue={this.state.title}
            onChange={event => this.handleChange("title", event)}
            fullWidth
          />
          <br />
          <TextField
            label='Edit movie description'
            defaultValue={this.state.description}
            onChange={event => this.handleChange("description", event)}
            multiline={true}
            rows={10}
            fullWidth
          />
          <Button>Submit</Button>
        </form>
        <Button>Reset</Button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(EditPage);
