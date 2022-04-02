import { ACTION_ADD, ACTION_COMPLETE, ACTION_TOGGLE_COMPLETION , ACTION_DELETE} from "./actionTypes";
import { findTaskIndex } from "../utils/lists";
import { saveTasks } from "../utils/localstorage";
import initialState from "./initialState";

function addReducer(state = initialState.list, action) {
  const newState = [...state];
  let index;



  switch (action.type) {
    case ACTION_ADD:
      newState.push(action.payload);
      saveTasks(newState);
      return newState;
      break;
    case ACTION_COMPLETE:
      index = newState.findIndex(task => task.id === action.payload.id);
      index = findTaskIndex(action.payload.id, newState);
      if (index >= 0) {
        newState[index].done = true;
        newState[index].completion_date = new Date().toISOString();
      }
      saveTasks(newState);
      return newState;
      break;
    case ACTION_TOGGLE_COMPLETION:
      index = findTaskIndex(action.payload.id, newState);
      if (index >= 0) {
        newState[index].done = !newState[index].done;
        newState[index].completion_date = newState[index].done ? new Date().toISOString() : null;
      }
      saveTasks(newState);
      return newState;
      break;
    case ACTION_DELETE:
      index = findTaskIndex(action.payload.id, newState);
      if (index >= 0) {
        newState.splice(index, 1);
      }
      saveTasks(newState);
      return newState;
      break;
    default:
      return state;
  }
}

export {
  addReducer
}
