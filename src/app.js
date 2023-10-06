'use strict';

const {
  WRONG_INPUT_MESSAGE,
  WELCOME_MESSAGE,
  VICTORY_MESSAGE,
  gameNumberSize,
} = require('./constants');
const { calculateBullsCows } = require('./calculateBullsCows');
const { ioInterface } = require('./ioInterface');
const { generateFixedSizeNumber } = require('./generateFixedSizeNumber');

function createGameSession(numberSize) {
  const gameNumber = generateFixedSizeNumber(numberSize);

  ioInterface.question(WELCOME_MESSAGE, (answer) => {
    if (answer.length !== numberSize || !Number(answer)) {
      ioInterface.write(WRONG_INPUT_MESSAGE);

      createGameSession();

      return;
    }

    const userNumber = Number(answer);

    if (gameNumber === userNumber) {
      ioInterface.write(VICTORY_MESSAGE);
      ioInterface.close();
    } else {
      const [bulls, cows] = calculateBullsCows(gameNumber, userNumber);

      ioInterface
        .write(`Oopsie, there are ${bulls} bulls and ${cows} cows (^◕ᴥ◕^)`);
      createGameSession();
    }
  });
}

createGameSession(gameNumberSize);
