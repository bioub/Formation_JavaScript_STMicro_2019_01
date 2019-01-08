const readline = require('readline');

const random = {
  getRandomFloat: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
};

function Jeu(options) {
  /*if (options === undefined) {
    options = {};
  }*/
  options = options || {};
  options.min = options.min || 0;
  /*
  if (options.min === undefined) {
    options.min = 0;
  }
  */

  if (options.max === undefined) {
    options.max = 100;
  }

  this.entierAlea = random.getRandomInt(options.min, options.max);
  this.essais = [];
  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

Jeu.prototype.jouer = function () {

  if (this.essais.length) {
    console.log('Vous avez déjà joué : ' + this.essais.join(' - '))
  }

  this._rl.question('Quel est le nombre ?', (saisie) => {

    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    // if .. else ...
    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné !');
    this._rl.close();

  });
};



const partie = new Jeu();
partie.jouer();
