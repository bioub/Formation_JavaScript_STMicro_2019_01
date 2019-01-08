// require permet d'importer un fichier (ici readline.js
// qui se trouve dans le binaire de node)
// l'api exporté est retourné par require
const readline = require('readline');

// readline est une abstraction, il permet de lire une ligne :
// - dans un fichier
// - sur une socket
// - dans une chaine de caractères
// - sur le clavier
// il faut donc le configurer
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


// on pause la question et on recoit la réponse via
// un callback
function jouer() {

  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '))
  }

  rl.question('Quel est le nombre ?', (saisie) => {

    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    // if .. else ...
    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné !');
    rl.close();

  });
}

const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();

// pile d'appels
// ^               question        question
// |question       jouer           jouer
// |jouer    ..⟳.. cbAnswer ..⟳.. cbAnswer
// +------------------------------2ms-------------------------> temps
//
