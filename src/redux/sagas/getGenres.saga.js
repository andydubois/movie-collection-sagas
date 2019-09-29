import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getGenres(action) {
  console.log("client side genre GET", action);
  try {
    let response = yield axios.get(`/api/details/genre/${action.payload}`);
    console.log("genre GET saga response", response.data);
    //gives genre info to genre reducer
    yield put({
      type: "SET_GENRES",
      payload: response.data
    });
  } catch (error) {
    console.log("error in details GET client side", error);
  }
}

function* watchMe() {
  yield takeEvery("FETCH_GENRES", getGenres);
}

export default watchMe;
