// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('sibe', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns "breed not found" when an non-existent or invalid breed is passed in, via callback', (done) => {
    fetchBreedDescription('blah', (err, desc) => {

      assert.equal(err, null);

      const expectedDesc = 'breed not found';

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});
