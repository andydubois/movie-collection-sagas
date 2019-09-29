//this will combine all our reducers

import {combineReducers} from "redux";
import movieReducer from "./movies.reducer";
import detailsReducer from "./details.reducer"
import genreReducer from "./genres.reducer"

const rootReducer = combineReducers({
    movieReducer,
    detailsReducer,
    genreReducer

});

export default rootReducer;