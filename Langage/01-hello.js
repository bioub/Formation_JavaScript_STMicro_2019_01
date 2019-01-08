// (function (exports, require, module, __filename, __dirname) {
const firstNames = ['Jean', 'Emilie', 'Pierre'];

/**
 * Salue quelqu'un (JSDoc)
 * @param {string} name La personne à saluer
 * @returns {string} Le message de salutations
 */
function hello(name) {
  return 'Hello ' + name;
}

for (let i = 0; i < firstNames.length; i++) {
  const firstName = firstNames[i];
  console.log(hello(firstName));
}

/*
for (const firstName of firstNames) {
  console.log(hello(firstName));
}
*/
// });
