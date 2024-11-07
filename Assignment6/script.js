document.getElementById('fetchButton').addEventListener('click', fetchChuckNorrisFact);

function fetchChuckNorrisFact() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      const chuckFact = document.getElementById('chuckFact');
      chuckFact.textContent = data.value; // chuckFact returned by API is stored in 'value'
    })
    .catch(error => console.error('Error fetching Chuck Norris fact:', error));
}
