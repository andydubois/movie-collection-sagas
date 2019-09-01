import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from "axios";
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from "redux-saga/effects";



//SAGAS -----------------

//GET list of all movies
function* getMovies(action) {
    console.log('client side movie GET', action);
    try {
        let response = yield axios.get('/api/movies');
        console.log('saga response', response.data);
        yield put ({
            type: 'SET_MOVIES',
            payload: response.data
        });
    } catch (error) {
        console.log('error in movie GET client side', error);
    }
}

//GET information for details of specified movie
function* getDetails(action) {
    console.log('client side details GET', action);
    try {
        let response = yield axios.get(`/api/details/${action.payload}`);
        console.log('details GET saga response', response.data);
        yield put ({
            type: 'SET_DETAILS',
            payload: response.data
        });
    } catch (error) {
        console.log('error in details GET client side', error)
    }
}

//GET information for genres of specified movie
function* getGenres(action) {
    console.log('client side genre GET', action);
    try {
        let response = yield axios.get(`/api/details/genre/${action.payload}`);
        console.log('genre GET saga response', response.data);
        yield put ({
            type: 'SET_GENRES',
            payload: response.data
        });
    } catch (error) {
        console.log('error in details GET client side', error)
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery("FETCH_MOVIES", getMovies)
    yield takeEvery("FETCH_DETAILS", getDetails)
    yield takeEvery("FETCH_GENRES", getGenres)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


//REDUCERS----------

// Used to store movies returned from the server
const movieReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genreReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Store the current movie details here
const detailsReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_DETAILS':
            return action.payload;
            default:
                return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieReducer,
        genreReducer,
        detailsReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
