import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { listReducer, lastUpdateReducer } from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";





const store = createStore(combineReducers({list: listReducer, lastUpdate: lastUpdateReducer}), composeWithDevTools());

export { store };
