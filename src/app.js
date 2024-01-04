'use strict';

const { terminal } = require('./userOperations');
const { generateNumber } = require('./generateNumber');
const { getBullsAndCows } = require('./getBullsAndCows');

terminal.question('Guess the number: ', (userString) => {
  getBullsAndCows(generateNumber(), userString);
  terminal.close();
});
