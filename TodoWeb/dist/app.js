/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
// CommonJS (require pour inclure un fichier et importer l'api public)
// const { addTodo } = require('./todo');
// Module ECMAScript (ES6, ES2015)

var btnAddElt = document.querySelector('.btn-add');
var todoContainerElt = document.querySelector('.todo-container');
/** @type {HTMLInputElement} */

var todoTextElt = document.querySelector('.todo-text');
btnAddElt.addEventListener('click', function (event) {
  // event.target ou event.currentTarget le bouton sur lequel j'ai cliqué
  // dans ce cas event.target === btnAddElt
  Object(_todo__WEBPACK_IMPORTED_MODULE_0__["addTodo"])({
    text: todoTextElt.value,
    completed: false
  }, todoContainerElt);
});
/*
console.log(btnAddElt instanceof HTMLButtonElement); // true
console.log(btnAddElt instanceof HTMLElement); // true
console.log(btnAddElt instanceof Element); // true
console.log(btnAddElt instanceof Node); // true
console.log(btnAddElt instanceof EventTarget); // true
*/

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: addTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodo", function() { return addTodo; });
/**
 * 
 * @param {object} todo 
 * @param {string} todo.text
 * @param {boolean} todo.completed
 * @param {HTMLElement} container 
 */
function addTodo(todo, container) {
  var rowElt = document.createElement('div');
  var inputElt = document.createElement('input');
  inputElt.value = todo.text;
  rowElt.appendChild(inputElt);
  container.appendChild(rowElt);
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




/***/ })

/******/ });
//# sourceMappingURL=app.js.map