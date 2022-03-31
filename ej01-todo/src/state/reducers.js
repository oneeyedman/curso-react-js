import {ACTION_ADD} from "./actionTypes";
import initialState from "./initialState";

function addReducer(state = initialState.list, action) {
  const newState = [...state];

  switch (action.type) {
    case ACTION_ADD:
      newState.push(action.payload.text);
      return newState;
      break;
    default:
      return state;
  }
}

export {
  addReducer
}
