const nbs = [3, 4, 5];

// programmation imperative (style de programme)
for (let i = 0; i < nbs.length; i++) {
  const nb = nbs[i];
  if (nb % 2 === 1) {
    const square = nb ** 2;
    console.log(square);
  }
}

// ES5 (IE9+)
// forEach, filter, map, reduce ....
// programmation fonctionnelle
nbs
  .filter((nb) => nb % 2 === 1)
  .map((nb) => nb ** 2)
  .forEach((nb) => console.log(nb));

console.log('FIN');

// pile d'appels
// ^                   lg   lg
// |=> => =>   => =>   => - =>
// |filter   - map   - forEach - lg
// +---------------------------------> temps
//                     9    25   FIN




/*
ES6 :
var sum = function (a, b) { return a + b; }
peut s'écrire (arrow function)
const sumFct = (a, b) => a + b;
const sumFct = (a, b) => a + b; // erreur
sumFct(1, 2);
sumFct(1, 2);
*/
