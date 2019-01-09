// setTimeout(() => {
//   console.log('1s');
//   setTimeout(() => {
//     console.log('1s');
//   }, 1000);
// }, 1000);

function timeout(delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

/*
timeout(1000)
  .then(() => {
    console.log('1s');
    return timeout(1000);
  })
  .then(() => {
    console.log('1s');
  })
  */

(async function() {
  await timeout(1000);
  console.log('1s');
  await timeout(1000);
  console.log('1s');
})();
