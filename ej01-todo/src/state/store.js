import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { addReducer } from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";





const store = createStore(combineReducers({list: addReducer}), composeWithDevTools());

export { store };
