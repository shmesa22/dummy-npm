var starWars = require('./index');
var expect = require('chai').expect;

describe('starwars-names', function() {
  describe('all', function() {
    it('should be an array of names', function() {
      expect(starWars.all).to.be.an('array');
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain Luke Sywalker', function() {
      expect(starWars.all).to.include('Luke Skywalker');
    })
  });

  describe('random', function() {
    it('should return a random item from starWars.all', function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });

    it('should return an array of random items', function() {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starWars.all).to.include(item);
      });
    });
  });
});
