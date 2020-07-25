const weatherForm = document.querySelector('form');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const address = document.getElementById('address');

weatherForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  p1.textContent = 'Loading...';
  p2.textContent = '';
  fetch(`/weather?address=${address.value}`).then((response) => {
    response.json().then(data => {
      if(data.error) {
        p1.textContent = data.error;
      }
      p1.textContent = data.location;
      p2.textContent = data.forecast;      
    });
  });
})
