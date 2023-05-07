import tasks from './tasks.js';
import './style.css';
import './storage.js';
import { addTask, deleteTask } from './app.js';
import { updateStatus, clearCompleted } from './update.js';

const tasks = [
  { description: 'Name', score: 100, index: 1 },
  { description: 'Name', score: 20, index: 2 },
  { description: 'Name', score: 50, index: 3 },
  { description: 'Name', score: 78, index: 4 },
  { description: 'Name', score: 125, index: 5 },
  { description: 'Name', score: 77, index: 6 },
  { description: 'Name', score: 42, index: 7 },
];

function renderTasks() {
  const todoList = document.getElementById('todo-list');

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.description;

    todoList.appendChild(taskItem);
  });
}

renderTasks();
