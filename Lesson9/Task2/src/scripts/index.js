import { initTodoListHandlers } from './todoList';
import { renderTasks } from './renderer';
import { getTasksList } from './tasksGateway';
import { setItem } from './storage';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((tasksList) => {
      setItem('tasksList', tasksList);
      renderTasks();
    });
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key !== 'tasksList') {
    return null;
  }
  renderTasks();
};

window.addEventListener('storage', onStorageChange);
