'use strict';
const { generateSecretNumber } = require('./generateSecretNumber.js');
const { play } = require('./play.js');

const secretNumber = generateSecretNumber('')()()()();

// eslint-disable-next-line no-console
console.log(secretNumber);

play(secretNumber);
