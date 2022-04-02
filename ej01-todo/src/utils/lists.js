function findTaskIndex(taskID, taskList) {
  return taskList.findIndex(task => task.id === taskID);
}

function getNextID(list) {
  return list.reduce((acc, val) => acc >= val.id ? acc : val.id, 0) + 1;
}


export {
  findTaskIndex,
  getNextID
}
