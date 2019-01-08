const fs = require('fs');

/**
 * @param {string} filePath
 * @param {string} msg
 * @returns {Promise}
 */
function log(filePath, msg) {
  // [2018-12-01] Ligne 1
  msg = `[${(new Date()).toISOString()}] ${msg}\n`;
  return fs.promises.appendFile(filePath, msg);
}

async function doLogs() {
  try {
    await log('app.log', 'Ligne 1');
    await log('app.log', 'Ligne 2');
    await log('app.log', 'Ligne 3');
    console.log('DONE');
  }
  catch (err) {
    console.log('ERROR ' + err.message);
  }
}

doLogs();

