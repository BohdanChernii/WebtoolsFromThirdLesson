import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.number.to-fixed.js";
import "core-js/modules/es.array.concat.js";
import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { getTasksList, createTask } from './tasksGateway.js'; // eslint-disable-next-line consistent-return

export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector(".task-input");
  var text = taskTitleInputElem.value;

  if (!text) {
    return null;
  }

  taskTitleInputElem.value = "";
  var tasksList = getItem("tasksList") || [];
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString(),
    id: (Math.random().toFixed(4) * 10000).toString()
  };
  createTask(newTask).then(function () {
    return getTasksList();
  }).then(function (newtasksList) {
    setItem("tasksList", newtasksList);
    renderTasks();
  });
  var newtasksList = tasksList.concat();
  setItem("tasksList", newtasksList);
  renderTasks();
};