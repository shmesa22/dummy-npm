var uniqueRandomArray = require('unique-random-array');
var randomNames = require('./random-name.json');
var getRandomItem = uniqueRandomArray(randomNames);

module.exports = {
  all: randomNames,
  random: random
};

function random(number) {
  if(number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for(var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
