import {ACTION_ADD} from "./actionTypes";
import initialState from "./initialState";

function addReducer(state = initialState.list, action) {


  switch (action.type) {
    case ACTION_ADD:
      state.push(action.payload.text);
      break
    default:
      return state;
  }
  return state;
}

export {
  addReducer
}
