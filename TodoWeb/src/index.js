const { addTodo } = require('./todo');

const btnAddElt = document.querySelector('.btn-add');
const todoContainerElt = document.querySelector('.todo-container');
/** @type {HTMLInputElement} */
const todoTextElt = document.querySelector('.todo-text');

btnAddElt.addEventListener('click', () => {
  addTodo({
    text: todoTextElt.value,
    completed: false,
  }, todoContainerElt);
});
/*
console.log(btnAddElt instanceof HTMLButtonElement); // true
console.log(btnAddElt instanceof HTMLElement); // true
console.log(btnAddElt instanceof Element); // true
console.log(btnAddElt instanceof Node); // true
console.log(btnAddElt instanceof EventTarget); // true
*/