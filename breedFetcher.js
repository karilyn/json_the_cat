const request = require('request');

// let breedId = 'sibe';

const breedName = (process.argv[2]);

// allow user to specify breed with command line arg

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/';
  request(url + breedName, (error, response, body) => {

    if (error) {
      callback(`request failed: ${error}`, null); // print the error if one occured
    // console.log('statusCode: ', response && response.statusCode);
    // console.log('body: ', body); // prints the HTML
    // console.log(typeof body)
    }
    const data = JSON.parse(body);
    // handling breed not found error
    if (!data['name']) {
      callback(error, "breed not found");

    } else {
      callback(null, data.description);
    }
  });
};


module.exports = { fetchBreedDescription };