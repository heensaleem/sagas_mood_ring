import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
// Import saga middleware
import createSagaMiddleware from 'redux-saga';



// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_IMAGES', getImagesSaga)
    yield takeEvery('FETCH_TAGS', getTagsSaga)
    yield takeEvery('ADD_TAGS', postTagsSaga)
    

}
//to get /api/images from the database and dispatch response to the reducer
function* getImagesSaga(){
    try{
        const imagesResponse =  yield axios.get('/api/images');
         console.log(imagesResponse);
        
         yield put({ type: 'SET_IMAGES', payload: imagesResponse.data })
     }catch(error){
         console.log('Error in getImagesSaga', error);
     }
}
//get tags from the database and dispatch response to the reducer
function* getTagsSaga(){
    try{
        const tagsResponse =  yield axios.get(`/api/tags`);
         console.log(tagsResponse);
        
         yield put({ type:'SET_TAGS', payload: tagsResponse.data })
     }catch(error){
         console.log('Error in getTagsSaga', error);
     }
}
//post the data from the dom collected into the junction table
function* postTagsSaga(action) {
    try {
        yield axios.post('/api/images/addtag', action.payload)
        yield put({ type: 'FETCH_TAGS' })
    } catch (err) {
        console.log('error in post',err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store images returned from the server
const images = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

//used to store the images_id and tags_id
   const tagsName = (state = [], action) => {
       switch (action.type) {
           case 'ADD_TAGS':
               return action.payload;
           default:
               return state;
       }
   }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        images,
        tags,
        tagsName
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
