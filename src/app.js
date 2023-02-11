'use strict';

const io = require('./io');
const generator = require('./generator');
const calculate = require('./calculate');

const answer = io.question();
const randomArray = generator.createRandomArray();

const result = calculate.checkResult(answer, randomArray);

// eslint-disable-next-line no-console
console.log(result);
