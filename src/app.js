'use strict';
/* eslint-disable no-console */

const {
  WRONG_INPUT_MESSAGE,
  WELCOME_MESSAGE,
  VICTORY_MESSAGE,
  GAME_NUMBER_SIZE,
} = require('./constants');
const { calculateBullsCows } = require('./calculateBullsCows');
const { ioInterface } = require('./ioInterface');
const { generateFixedSizeNumber } = require('./generateFixedSizeNumber');

const generatedNumber = generateFixedSizeNumber(GAME_NUMBER_SIZE);

async function createGameSession(numberSize, gameNumber) {
  while (true) {
    const answer = await new Promise((resolve) => {
      ioInterface.question(WELCOME_MESSAGE, resolve);
    });

    if (answer.length !== numberSize || !Number(answer)) {
      console.log(WRONG_INPUT_MESSAGE);

      continue;
    }

    const userNumber = Number(answer);

    if (gameNumber === userNumber) {
      console.log(VICTORY_MESSAGE);
      break;
    }

    const { bulls, cows } = calculateBullsCows(gameNumber, userNumber);
    const bullsAndCowsMessage
      = `Oopsie, there are ${bulls} bulls`
      + ` and ${cows} cows (^◕ᴥ◕^)`;

    console.log(bullsAndCowsMessage);
  }

  ioInterface.close();
}

createGameSession(GAME_NUMBER_SIZE, generatedNumber);
