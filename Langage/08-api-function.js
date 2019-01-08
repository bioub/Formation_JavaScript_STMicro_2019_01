// 'use strict';

global.prenom = 'Gérard';

const contact = {
  prenom: 'Romain',
};

function hello(p1, p2) {
  return `Bonjour ${p1}, ${p2} je m'appelle ${this.prenom} !`;
}


console.log(hello('Jean', 'Pierre')); // Bonjour je m'appelle Gérard !
console.log(hello.call(contact, 'Jean', 'Pierre')); // Bonjour je m'appelle Gérard !
console.log(hello.apply(contact, ['Jean', 'Pierre'])); // Bonjour je m'appelle Gérard !
console.log(hello.call(contact, ...['Jean', 'Pierre'])); // Bonjour je m'appelle Gérard !

const helloContact = hello.bind(contact); // ES5
console.log(helloContact('Jean', 'Pierre'));
