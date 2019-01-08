// référence vs pas référence (scalaire)
const nb1 = 1;
let nb2 = nb1; // passage par valeur
nb2 = 2;
console.log(nb1); // 1

const o1 = { nb: 1 };
const o2 = o1; // passage par référence
o2.nb = 2;
console.log(o1.nb); // 2

// object literal
const coords = {
  x: 10,
  y: 20,
};

coords.z = 30;
console.log(coords.z); // 30;

// un autre opérateur pour accéder aux clés de l'objets
console['log'](coords['z']); // 30;

// plus dynamique (à utiliser quand le nom de la clé est
// dans un variable/fichier de config...)
const key = 'z';
const logMethod = 'log';
console[logMethod](coords[key]); // 30;

// pour boucler sur les clés
for (const key in coords) {
  const value = coords[key];
  console.log(key, value);
}

// si vous mettez des méthodes dans un object déclaré
// avec object literal, et que vous créez plusieurs objets
// les méthodes seront dupliqués
const contact1 = {
  prenom: 'Romain',
  hello: function() {
    return 'Bonjour je suis ' + this.prenom;
  }
};

const contact2 = {
  prenom: 'Pierre',
  hello: function() {
    return 'Bonjour je suis ' + this.prenom;
  }
};

console.log(contact1.hello());
console.log(contact2.hello());
console.log(contact1.hello === contact2.hello); // false

// factory function
function contactFactory(prenom) {
  return {
    prenom: prenom,
    hello: function() { // mauvaise idée de placer la fonction ici
      // elle sera dupliqué
      return 'Bonjour je suis ' + this.prenom;
    }
  };
}

const contactA = contactFactory('Romain');
const contactB = contactFactory('Pierre');

console.log(contactA.hello());
console.log(contactB.hello());
console.log(contactA.hello === contactB.hello); // false

// constructor function
function Contact(prenom) {
  // modèle objet dynamique
  // aucune garantie que les clés existent
  // if (prenom.length > 2) {
    this.prenom = prenom;
  // }
}

Contact.getClassName = function() {
  return 'Contact';
}

Contact.prototype.hello = function() { // bonne idée de placer la fonction ici
  // elle n'est pas dupliquée
  return 'Bonjour je suis ' + this.prenom;
}

const contactAlpha = new Contact('Romain');
const contactBeta = new Contact('Pierre');

console.log(Contact.getClassName());
console.log(contactAlpha.hello());
console.log(contactBeta.hello());
console.log(contactAlpha.hello === contactBeta.hello); // true

for (const key in contactAlpha) {
  // if (typeof contactAlpha[key] !== 'undefined') {
  if (contactAlpha.hasOwnProperty(key)) {
    const value = contactAlpha[key];

  }
}
