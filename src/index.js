var uniqueRandomArray = require('unique-random-array');
var randomNames = require('./random-name.json');

module.exports = {
  all: randomNames,
  random: uniqueRandomArray(randomNames)
};
