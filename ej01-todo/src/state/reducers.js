import { ACTION_ADD, ACTION_COMPLETE } from "./actionTypes";
import initialState from "./initialState";

function addReducer(state = initialState.list, action) {
  const newState = [...state];

  switch (action.type) {
    case ACTION_ADD:
      newState.push(action.payload);
      return newState;
      break;
    case ACTION_COMPLETE:
      const index = newState.findIndex(task => task.id === action.payload.id);
      if (index >= 0) {
        newState[index].done = true;
        newState[index].completed_date = new Date().toISOString();
      }

      console.log(newState)
      return newState;
      break;
    default:
      return state;
  }
}

export {
  addReducer
}
