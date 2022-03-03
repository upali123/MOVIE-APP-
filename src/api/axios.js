const axios = require('axios')

axios.post('localhost:3001/about', {
    Name: 'Fred',
    Age: '23'
  })
  .then(function (response) {
    console.log(response);
  })
