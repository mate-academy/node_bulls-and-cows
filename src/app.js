'use strict';

const { getRandomNumber } = require('./getRandomNumber');
const { requestNumber } = require('./requestNumber');

const generatedNum = getRandomNumber();

requestNumber(generatedNum);
