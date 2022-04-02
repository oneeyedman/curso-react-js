function findTaskIndex(taskID, taskList) {
  return taskList.findIndex(task => task.id === taskID);
}

export {
  findTaskIndex,
}
