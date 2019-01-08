const fs = require('fs');
const async = require('async');

function log(filePath, msg, cb) {
  // [2018-12-01] Ligne 1
  msg = `[${(new Date()).toISOString()}] ${msg}\n`;
  fs.appendFile(filePath, msg, cb);
}

async.series([
  (next) => log('app.log', 'Ligne 1', next),
  (next) => log('app.log', 'Ligne 2', next),
  (next) => log('app.log', 'Ligne 3', next),
], (err) => {
  if (err) {
    return console.log('ERROR');
  }
  console.log('DONE');
});
