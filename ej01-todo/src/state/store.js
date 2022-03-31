import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { addReducer } from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

import {ACTION_ADD} from "./actionTypes";
import initialState from "./initialState";



const store = createStore(combineReducers({list: addReducer}), composeWithDevTools());

export { store };
