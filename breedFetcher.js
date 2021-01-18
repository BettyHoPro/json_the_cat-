const request = require('request');
const userInput = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`,(error, response,body) => {
  if (error) {
    console.log(error);
    return;
  }
  const bodyJson = JSON.parse(body);
  if (bodyJson.length === 0) {
    console.log("No breed fund");
    return;
  }
  console.log(bodyJson[0].description);
    
});