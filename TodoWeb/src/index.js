// pour les fonctions, utiliser les polyfills (ex core-js)
// import 'core-js/fn/string/pad-end'
// '2123456'.padEnd(20, '0');

// CommonJS (require pour inclure un fichier et importer l'api public)
// const { addTodo } = require('./todo');

// Module ECMAScript (ES6, ES2015)
import { addTodo } from './todo';

const formElt = document.querySelector('form');
const todoContainerElt = document.querySelector('.todo-container');
/** @type {HTMLInputElement} */
const todoTextElt = document.querySelector('.todo-text');

formElt.addEventListener('submit', (event) => {

  event.preventDefault();
  
  // event.target ou event.currentTarget le bouton sur lequel j'ai cliqué
  // dans ce cas event.target === btnAddElt

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