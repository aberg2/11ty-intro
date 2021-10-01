const axios = require('axios');
const index = Math.floor(Math.random() *100);
// Make a request for a user with a given ID
 axios
     .get('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/?index=2')
     .then(function (response) {
         // handle success
         console.log(response.data[0].fact);
         return response.data[0];
     })
     .catch(function (error) {
         // handle error
         console.log(error);
     });
