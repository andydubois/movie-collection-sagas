import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getDetails(action) {
  console.log("client side details GET", action);
  try {
    let response = yield axios.get(`/api/details/${action.payload}`);
    console.log("details GET saga response", response.data);
    //gives selected movie details to detail reducer
    yield put({
      type: "SET_DETAILS",
      payload: response.data
    });
  } catch (error) {
    console.log("error in details GET client side", error);
  }
}
function* setTitle(action) {
  console.log("changing title to", action.payload);
  console.log("index.js setTitle", action.payload.id, action.payload.title);
  try {
    yield axios.put(`api/details/updateTitle`, action.payload);
    //retrieves updated data from server with new title
    yield put({
      type: "FETCH_DETAILS",
      payload: action.payload.id
    });
  } catch (error) {
    console.log("error in POST", error);
  }
}

//Changes description for specified movie in database
function* setDescription(action) {
  console.log("changing description to", action.payload);
  console.log(
    "index.js setDescription",
    action.payload.id,
    action.payload.description
  );
  try {
    yield axios.put(`api/details/updateDescription`, action.payload);
    //retrieves updated data from server with new description
    yield put({
      type: "FETCH_DETAILS",
      payload: action.payload.id
    });
  } catch (error) {
    console.log("error in POST", error);
  }
}

function* watchMe() {
  yield takeEvery("FETCH_DETAILS", getDetails);
  yield takeEvery("CHANGE_TITLE", setTitle);
  yield takeEvery("CHANGE_DESCRIPTION", setDescription);
}

export default watchMe;
