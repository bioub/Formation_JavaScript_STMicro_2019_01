// ... revient à convertir :
// REST Param
// une liste 1, 2, 3, 4, 5
// en un tableau
function sum(...nbs) {
  return nbs.reduce((acc, nb) => acc + nb, 0);
}

// acc: 0, nb: 1, return: 1
// acc: 1, nb: 2, return: 3
// acc: 3, nb: 3, return: 6,
// acc: 6, nb: 4, return: 10,
// acc: 10, nb: 5, return: 15

console.log(sum(1, 2, 3, 4, 5)); // 15

// SPREAD Operator
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

const nbs = [1, 2, 3, 4, 5];
console.log(sum(...nbs));

const clone = [...nbs];


const [un, deux, trois, quatre, cinq, six = 6] = nbs;

const coords = {
  x: 10,
  y: 20,
};

const {x: xValue} = coords;
console.log(xValue); // 10

const {x, y, z = 10} = coords;
console.log(x); // 10


// Générateur
function *getValues() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = getValues();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

for (const value of getValues()) {
  console.log(value);
}
