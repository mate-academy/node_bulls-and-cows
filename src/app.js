'use strict';

const { generateRandomNumber } = require('./utils/randomGenerator');
const { startNewRound } = require('./services/game.service');

const start = () => {
  const generatedNumber = generateRandomNumber();

  startNewRound(generatedNumber);
};

start();
