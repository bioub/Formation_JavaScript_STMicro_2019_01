/**
 * @param {Element} container 
 * @param {Element} elt 
 */
function prepend(container, elt) {
  if (container.firstElementChild) {
    container.insertBefore(elt, container.firstElementChild);
  } else {
    container.appendChild(elt);
  }
}

export {
  prepend,
};