'use strict';

const countBulls = require('./modules/countBulls');
const countCows = require('./modules/countCows');
const generateNum = require('./modules/generateNum');

const num = generateNum(1000, 9999);
const input = +process.argv[2];
const bulls = countBulls(num, input);
const cows = countCows(num, input);

/* eslint-disable no-console */
console.log(`Bulls: ${bulls}`);
console.log(`Cows: ${cows}`);
