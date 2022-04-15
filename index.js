const { fetchBreedDescription } = require('./breedFetcher');

//command line variables
const breedName = process.argv[2]; // cli aregument

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
