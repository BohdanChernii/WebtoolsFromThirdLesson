import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";
import { getTasksList } from './tasksGateway.js';
import { setItem } from "./storage.js";
document.addEventListener("DOMContentLoaded", function () {
  getTasksList().then(function (tasksList) {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  renderTasks();
  initTodoListHandlers();
});

var onStorageChange = function onStorageChange(e) {
  if (e.key !== "tasksList") {
    return null;
  }

  renderTasks();
};

window.addEventListener("storage", onStorageChange);