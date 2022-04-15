const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // console.log("breedName: ",breedName)
  // console.log("callback",callback)
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url,(error, responce, body) => {
    const data = JSON.parse(body);//turns from string to object
    if (data.length === 0) {
      //console.log("data: ", data);
      callback(error, "This breed does not exist");
      return null;
    }
    if (error) {
      //console.log("error: ", error);
      callback(error, null);
      return null;
    }
    callback(null, data[0].description); //data is an array not an object! need to acess the array, then the object
  });
};

module.exports = { fetchBreedDescription };