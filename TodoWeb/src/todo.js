import { prepend } from "./dom";

/**
 * 
 * @param {object} todo 
 * @param {string} todo.text
 * @param {boolean} todo.completed
 * @param {HTMLElement} container 
 */
function addTodo(todo, container) {
  const rowElt = document.createElement('div');

  const inputElt = document.createElement('input');
  inputElt.value = todo.text;
  rowElt.appendChild(inputElt);

  prepend(container, rowElt);
}

/*
Exercice DOM :
1 - Modifier addTodo de telle sorte à ajouter
une checkbox avant le champs (<input type="checkbox">)
et un bouton moins après le champs (<button>-</button>)
MDN : HTMLInputElement et HTMLButtonElement

2 - Au clic du bouton moins supprimer la ligne (l'élement rowElt)
MDN: removeChild, parentNode

3 - Au clic de la checkbox initiale
cocher ou décocher toutes les autres
MDN: HTMLInputElement, querySelectorAll
*/

// CommonJS (exports pour exporter l'API Public)
// exports.addTodo = addTodo;

// Module ES
export { addTodo };