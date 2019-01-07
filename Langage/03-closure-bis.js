const a = 'a';
function externe() {
  const b = 'b';
  function interne() {
    const c = 'c';
    console.log(c); // portée locale
    console.log(b); // portée closure
    console.log(a); // portée globale/fichier
  }
  return interne;
}

const interneDepuisExterne = externe();
interneDepuisExterne();
console.log(typeof interne); // undefined

// pile d'appels
// ^
// |
// |externe - interneDepuisExterne
// +--------------------------> temps


// on se sert des closures pour sauvegarder des
// valeurs précédentes
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

function closure(iSaved) {
  return function() {
    console.log(iSaved);
  }
}

for (var i=0; i<3; i++) {
  setTimeout(closure(i), 1000);
}
