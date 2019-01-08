const fs = require('fs');
const bluebird = require('bluebird');

bluebird.promisifyAll(fs);

/**
 * @param {string} filePath
 * @param {string} msg
 * @returns {Promise}
 */
function log(filePath, msg) {
  // [2018-12-01] Ligne 1
  msg = `[${(new Date()).toISOString()}] ${msg}\n`;
  return fs.appendFileAsync(filePath, msg);
}

log('app.log', 'Ligne 1')
  .then(() => log('app.log', 'Ligne 2'))
  .then(() => log('app.log', 'Ligne 3'))
  .then(() => console.log('DONE'))
  .catch((err) => console.log('ERROR'));
