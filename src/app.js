'use strict';

const { getRandom } = require('./getRandomNum');
const { compareTheNumbers } = require('./compareTheNumbers');

const randomNumber = getRandom();

compareTheNumbers('enter a number ', randomNumber);
