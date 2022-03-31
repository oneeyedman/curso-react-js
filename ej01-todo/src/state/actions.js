import {ACTION_ADD} from "./actionTypes";

function addAction(text) {
  return {
    type: ACTION_ADD,
    payload: { text }
  }
}

export {
  addAction
};
