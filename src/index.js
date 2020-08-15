import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger} from 'redux-logger'
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {searchCharacters, requestCharachters} from './redux/reducers'

const rootReducer = combineReducers({searchCharacters, requestCharachters})
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={store}>
    <App />
</Provider >, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
