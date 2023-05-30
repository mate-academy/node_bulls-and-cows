'use strict';

const randomizer = require('./randomizer');
const game = require('./game');

const secret = randomizer();

// eslint-disable-next-line no-console
console.log('Let\'s play a game!');

game(secret);
