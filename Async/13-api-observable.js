const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delayMs);
  });
}


interval(1000)
  .subscribe(() => {
    console.log('1s');
  })

  /*
(async function() {
  await timeout(1000);
  console.log('1s');
  await timeout(1000);
  console.log('1s');
})();
*/
