const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response,body) => {
    if (error) {
      callback(error);
      return;
    }
    const bodyJson = JSON.parse(body);
    if (bodyJson.length === 0) {
      callback("No breed fund");
      return;
    }
    callback(null, bodyJson[0].description);
  });
};
module.exports = { fetchBreedDescription };
