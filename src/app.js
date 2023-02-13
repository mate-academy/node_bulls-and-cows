'use strict';

const { getRandom } = require('./helpers/getRandomNum');
const { compareTheNumbers } = require('./helpers/compareTheNumbers');

const randomNumber = getRandom();

compareTheNumbers('enter a number ', randomNumber);
