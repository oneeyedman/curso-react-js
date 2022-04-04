import { loadTasks } from "../utils/localstorage";

const state = {
  list: loadTasks(),
  lastUpdate: +new Date()
};

export default state;
