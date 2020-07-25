const weatherForm = document.querySelector('form');
const address = document.getElementById('address');

weatherForm.addEventListener('submit', (evt) => {
  // evt.preventDefault();
  fetch(`http://localhost:3000/weather?address=${address.value}`).then((response) => {
    response.json().then(data => {
      if(data.error) {
        return console.log(data.error);
      }
      
      console.log(data.location);
      console.log(data.forecast);
    });
  });
})
