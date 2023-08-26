/* eslint-disable no-console */
'use strict';

const generateRandomNumber = require('./generateRandomNumber');
const handlePlayRound = require('./handlePlayRound');

const handlePlayGame = () => {
  const programNumber = generateRandomNumber();

  handlePlayRound(programNumber);

  console.log(
    'Welcome to the Bulls and Cows game!',
    'Try to guess the 4-digit number with unique digits:',
  );
};

handlePlayGame();
