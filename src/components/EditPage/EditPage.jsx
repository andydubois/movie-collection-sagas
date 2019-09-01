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

  //function to run when submit button is clicked and "submits" form
  handleTitleSubmit = event => {
    event.preventDefault();
    //take current local state and sends to reducer
    this.props.dispatch({
      type: "CHANGE_TITLE",
      payload: this.state.title
    });
  };

  //returns user to previous details page
  returnToDetailPage = action => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    return (
      <div>
        <p>Edit time</p>
        <form onSubmit={this.handleTitleSubmit}>
          <TextField
            label='Edit movie title'
            defaultValue={this.props.store.detailsReducer.title}
            onChange={event => this.handleChange("title", event)}
            fullWidth
          />
          <Button className='nextButton' variant='contained'>
            Submit
          </Button>
        </form>
        <form>
          <TextField
            label='Edit movie description'
            defaultValue={this.props.store.detailsReducer.description}
            onChange={event => this.handleChange("description", event)}
            multiline={true}
            rows={10}
            fullWidth
          />
          <Button className='nextButton' variant='contained'>
            Submit
          </Button>
        </form>

        <Button
          onClick={this.returnToDetailPage}
          variant='contained'
          color='secondary'>
          Reset
        </Button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(EditPage);
