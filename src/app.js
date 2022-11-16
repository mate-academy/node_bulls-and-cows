'use strict';

const { generateSecretNumber } = require('./generateSecretNumber');
const { play } = require('./play');

const secretNumber = generateSecretNumber('')()()()();

// eslint-disable-next-line no-console
console.log(secretNumber);

play(secretNumber);
