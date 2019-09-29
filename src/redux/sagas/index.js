import {all} from "redux-saga/effects";
import getMovies from "./getMovies.saga"
import getGenres from "./getGenres.saga"
import getDetails from "./getDetails.saga"

export default function* rootSaga () {
    //all is similar to combine reducers
    yield all([
        getMovies(),
        getGenres(),
        getDetails(),
    ]);
}
