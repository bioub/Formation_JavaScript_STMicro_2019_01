
const a = 'a';
function externe() {
  const b = 'b';
  function interne() {
    const c = 'c';
    console.log(c); // portée locale
    console.log(b); // portée closure
    console.log(a); // portée globale/fichier
  }

  interne();
}

externe();
console.log(typeof interne); // undefined


// pile d'appels
// ^
// |interne
// |externe
// +--------------------------> temps
