const urls = [
  'https://reqres.in/api/users/1',
  'https://reqres.in/api/users/2',
  'https://reqres.in/api/users/3'
];

function arreglos(urls) {
  const fetchPromises = [];

  for (const url of urls) {
    const promise = fetch(url)
      .then(response => {

        return response.json();
      })
      .catch(error => {
        throw error;
      });
    fetchPromises.push(promise);
  }
  return Promise.all(fetchPromises);
}

arreglos(urls)
  .then(results => {
    console.log('Solicitudes:', results);
  })
  .catch(error => {
    console.error('Error:', error);
  });


