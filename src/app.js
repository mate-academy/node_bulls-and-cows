'use strict';

const { getAnimals } = require('./calculation');
const { randomNumbers } = require('./generateNumber');
const { answer } = require('./terminal');

// eslint-disable-next-line
console.log(getAnimals(randomNumbers, answer));
