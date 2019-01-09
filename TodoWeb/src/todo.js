/**
 * 
 * @param {object} todo 
 * @param {string} todo.text
 * @param {boolean} todo.completed
 * @param {HTMLElement} container 
 */
function addTodo(todo, container) {
  const rowElt = document.createElement('div');
  rowElt.innerText = todo.text;
  container.appendChild(rowElt);
}

exports.addTodo = addTodo;