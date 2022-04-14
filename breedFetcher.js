const request = require('request');

//command line variables
const breedName = process.argv[2]; // cli aregument


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
  console.log("error:", error);
  const data = JSON.parse(body);
  //console.log("data.weight: ", data[0].weight); //data is an array not an object! need to acess the array, then the object
  console.log("Breed Description:", data[0].description)
});

