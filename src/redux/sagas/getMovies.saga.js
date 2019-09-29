import axios from "axios";
import {put, takeEvery } from "redux-saga/effects"

function* getMovies(action) {
  console.log("client side movie GET", action);
  try {
    let response = yield axios.get("/api/movies");
    console.log("saga response", response.data);
    yield put({
      type: "SET_MOVIES",
      payload: response.data
    });
  } catch (error) {
    console.log("error in movie GET client side", error);
  }
}

function* watchMe() {
    yield takeEvery("FETCH_MOVIES", getMovies)
}

export default watchMe;