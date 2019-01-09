const fakeDb = {
  '/contacts': [{prenom: 'R'}, {prenom: 'B'}],
  '/societes': [{nom: 'A'}, {nom: 'Z'}],
};

function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = fakeDb[url];

      if (!data) {
        return reject(new Error('Not Found'));
      }

      resolve(data);
    }, Math.random() * 1000);
  });
}

/*
request('/contacts')
  .then((data) => {
    console.log('/contacts', data);
  })
  .catch((err) => {
    console.log(err.message)
  });

request('/societes')
  .then((data) => {
    console.log('/societes', data);
  })
  .catch((err) => {
    console.log(err.message)
  });
*/

/*
Promise.all([
  request('/contacts'),
  request('/societes'),
]).then(([dataContacts, dataSocietes]) => {
  console.log('/contacts', dataContacts);
  console.log('/societes', dataSocietes);
}).catch((err) => {
  console.log(err.message)
})
*/

(async function() {
  const [dataContacts, dataSocietes] = await Promise.all([
    request('/contacts'),
    request('/societes'),
  ]);
  console.log('/contacts', dataContacts);
  console.log('/societes', dataSocietes);
})();
