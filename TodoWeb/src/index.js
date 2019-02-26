// pour les fonctions, utiliser les polyfills (ex core-js)
// import 'core-js/fn/string/pad-end'
// '2123456'.padEnd(20, '0');
import '@babel/polyfill';

// CommonJS (require pour inclure un fichier et importer l'api public)
// const { addTodo } = require('./todo');

// Module ECMAScript (ES6, ES2015)
import { addTodo } from './todo';
import { fetchTodos, postTodo, deleteTodoById } from './api';

const formElt = document.querySelector('form');
const todoContainerElt = document.querySelector('.todo-container');
/** @type {HTMLInputElement} */
const todoTextElt = document.querySelector('.todo-text');
const toggleElt = document.querySelector('.toggle-completed');
const toggleShowElt = document.querySelector('.toggle-show');

formElt.addEventListener('submit', async (event) => {

  event.preventDefault();

  // event.target ou event.currentTarget le bouton sur lequel j'ai cliqué
  // dans ce cas event.target === btnAddElt

  const newTodoFromServer = await postTodo({
    text: todoTextElt.value,
    completed: false,
  });

  addTodo(newTodoFromServer, todoContainerElt);
});

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('btn-remove')) {
    const rowElt = event.target.parentNode;
    await deleteTodoById(event.target.dataset.todoId);
    todoContainerElt.removeChild(rowElt);
  }
});

toggleElt.addEventListener('click', () => {
  const checkboxes = todoContainerElt.querySelectorAll('.todo-completed');
  // console.log(checkboxes instanceof Array); // false
  // console.log(checkboxes instanceof NodeList); // true

  for (const checkbox of checkboxes) {
    checkbox.checked = toggleElt.checked;
  }
});

/*
console.log(btnAddElt instanceof HTMLButtonElement); // true
console.log(btnAddElt instanceof HTMLElement); // true
console.log(btnAddElt instanceof Element); // true
console.log(btnAddElt instanceof Node); // true
console.log(btnAddElt instanceof EventTarget); // true
*/


toggleShowElt.addEventListener('click', () => {
  // formElt.style.display = (formElt.style.display === 'none') ? null : 'none';

  formElt.classList.toggle('hidden');
});

(async () => {
  const todos = await fetchTodos();

  for (const todo of todos) {
    addTodo(todo, todoContainerElt);
  }
})();
