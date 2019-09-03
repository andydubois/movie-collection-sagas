import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";

//Material UI Components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";

//allows resizing of text within edit fields so its easier to read
const styles = theme => ({
  resize:{
    fontSize:15
  },
  titleResize: {
      fontSize: 20
  }
})

class EditPage extends Component {
  //storing title and description of selected movie as state
  state = {
    id: this.props.store.detailsReducer.id,
    title: this.props.store.detailsReducer.title,
    description: this.props.store.detailsReducer.description
  };

  //   runs nested functions on page load
  componentDidMount() {
    console.log(this.state);
    //attempt at getting values to stay as default values in inputs even after page refresh
    this.getDetails();
    this.setState({
      id: this.props.store.detailsReducer.id,
      title: this.props.store.detailsReducer.title,
      description: this.props.store.detailsReducer.description
    });
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

  //function to run when submit button is clicked and "submits" form under title
  handleTitleSubmit = event => {
    event.preventDefault();
    //take current local state and sends to reducer
    this.props.dispatch({
      type: "CHANGE_TITLE",
      payload: this.state
    });
    console.log("changing title to", this.state.title);
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  //function to run when submit button is clicked and "submits" form under description
  handleDescriptionSubmit = event => {
    event.preventDefault();
    //take current local state and sends to reducer
    this.props.dispatch({
      type: "CHANGE_DESCRIPTION",
      payload: this.state
    });
    console.log("changing description to", this.state.description);
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  //returns user to previous details page
  returnToDetailPage = action => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {

const {classes} = this.props

    return (
      <div className='react-transition swipe-right container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-6'>
            <Header title={"Edit Movie Details"} />
            <Paper>
              <form onSubmit={this.handleTitleSubmit}>
                <TextField
                  label='Edit movie title'
                  defaultValue={this.props.store.detailsReducer.title}
                  onChange={event => this.handleChange("title", event)}
                  fullWidth
                  InputProps={{
                    classes: {
                      input: classes.titleResize
                    }
                  }}
                />
                <Button
                  type='submit'
                  className='nextButton'
                  variant='contained'
                  color='primary'>
                  Submit Changes
                </Button>
              </form>
              <br />
              <form onSubmit={this.handleDescriptionSubmit}>
                <TextField
                  label='Edit movie description'
                  defaultValue={this.state.description}
                  onChange={event => this.handleChange("description", event)}
                  multiline={true}
                  rows={10}
                  fullWidth
                  InputProps={{
                    classes: {
                      input: classes.resize
                    }
                  }}
                  className={classes.resize}
                />
                <Button
                  type='submit'
                  className='nextButton'
                  variant='contained'
                  color='primary'>
                  Submit Changes
                </Button>
              </form>
              <Button
                onClick={this.returnToDetailPage}
                variant='contained'
                color='secondary'>
                Back
              </Button>
            </Paper>
          </div>
          <div className='col'></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

export default withStyles(styles)(connect(mapStateToProps)(EditPage));
