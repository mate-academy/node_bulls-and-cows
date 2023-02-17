'use strict';

const { launchGame } = require('./launchGame');
const { getRandomNumber } = require('./helpers/getRandomNumber');

const targetNumber = getRandomNumber();

launchGame(targetNumber);
