const request = require('request');

// let breedId = 'sibe';
const BASE_URL = 'https://api.thecatapi.com/v1/';

// allow user to specify breed with command line arg
printBreed(process.argv[2]);

function printBreed(breedId) {

  request(BASE_URL + "breeds/" + breedId, (error, response, body) => {
    // handling request error
    if (error) {
      console.log('error: ', error); // print the error if one occured
    // console.log('statusCode: ', response && response.statusCode);
    // console.log('body: ', body); // prints the HTML
    // console.log(typeof body)
    }
    const data = JSON.parse(body);
    // handling breed not found error
    if (!data['name']) {
      console.log("breed not found");
    } else {
      console.log(data.name);
    }
  });
}


