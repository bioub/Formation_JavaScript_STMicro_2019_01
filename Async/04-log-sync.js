const fs = require('fs');

function log(filePath, msg) {
  // [2018-12-01] Ligne 1
  msg = `[${(new Date()).toISOString()}] ${msg}\n`;
  fs.appendFileSync(filePath, msg);
}

try {
  log('app.log', 'Ligne 1');
  log('app.log', 'Ligne 2');
  log('app.log', 'Ligne 3');
  console.log('DONE');
}
catch (err) {
  console.log('ERROR');
}
