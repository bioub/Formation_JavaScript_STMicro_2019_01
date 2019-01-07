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

// on pause la question et on recoit la réponse via
// un callback
function jouer() {

  rl.question('Quel est le nombre ?', (saisie) => {
    console.log('Réponse : ' + saisie);

    // if .. else ...

    jouer();
  });
}

jouer();
console.log('FIN');


// pile d'appels
// ^               question        question
// |question       jouer           jouer
// |jouer    ..⟳.. cbAnswer ..⟳.. cbAnswer
// +------------------------------2ms-------------------------> temps
//
