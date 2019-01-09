const fs = require('fs');

function log(filePath, msg, cb) {
  // [2018-12-01] Ligne 1
  msg = `[${(new Date()).toISOString()}] ${msg}\n`;
  fs.appendFile(filePath, msg, cb);
}

// Callback Hell / Pyramid of Doom
log('app.log', 'Ligne 1', (err) => {
  if (err) {
    return console.log('ERROR');
  }
  log('app.log', 'Ligne 2', (err) => {
    if (err) {
      return console.log('ERROR');
    }
    log('app.log', 'Ligne 3', (err) => {
      if (err) {
        return console.log('ERROR');
      }
      console.log('DONE');
    });
  });
});

// pile d'appels
// ^                            appendFile         cnsl.lg
// |      appendFile            log                log
// |try { log       }   ....... =>         ....... =>
// +-------------------------------------------------------> temps
//
