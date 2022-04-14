const request = require('request');

//command line variables
const breedName = process.argv[2]; // cli aregument


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {

  if (error) {
    console.log("Error. There is an issue with the API. Please try again.");
    return;
  }

  const data = JSON.parse(body);
  // console.log('data:', data.length)
  // console.log("typeOfbody: ",typeof body)

  if (data.length === 0) {
    console.log("Breed not found");
    return;
  }
  //data is an array not an object! need to acess the array, then the object
  console.log("Breed Description:", data[0].description);
});

