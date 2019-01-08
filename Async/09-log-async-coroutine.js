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

const doLogs = bluebird.coroutine(function *() {
  yield log('app.log', 'Ligne 1');
  yield log('app.log', 'Ligne 2');
  yield log('app.log', 'Ligne 3');
  console.log('DONE');
});

doLogs();
