/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./randomGenerator');
const { playerInput } = require('./playerInput');
const { calc } = require('./checkAttempt');

async function game() {
  const randomNumber = generateRandomNumber();

  async function attempt() {
    const playerNumber = await playerInput();

    const { bulls, cows } = calc(randomNumber, playerNumber);

    if (bulls === 4) {
      console.log('You are the winner!');
    } else {
      console.log(`bulls: ${bulls}, cows: ${cows}`);
      await attempt();
    }
  }

  await attempt();
};

game();
