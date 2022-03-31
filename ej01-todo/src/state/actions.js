import { ACTION_ADD, ACTION_COMPLETE } from "./actionTypes";

function addAction(obj) {
  return {
    type: ACTION_ADD,
    payload: {...obj}
  }
}

function completeAction(id) {
  return {
    type: ACTION_COMPLETE,
    payload: { id: Number(id) }
  }
}

export {
  addAction,
  completeAction
};
