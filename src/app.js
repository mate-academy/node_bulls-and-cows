/* eslint-disable no-console */
'use strict';

const { getUserNumber } = require('./modules/getUserNumber');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { calcBullsAndCows } = require('./modules/calcBullsAndCows');

async function startGame() {
  const generatedNumber = generateRandomNumber(4);
  const userNumber = await getUserNumber();

  if (generatedNumber === userNumber) {
    console.log('You guessed the number!, You won!');
  } else {
    const { bulls, cows } = calcBullsAndCows(generatedNumber, userNumber);

    console.log(
      `computers number: ${generatedNumber}`,
      `your number: ${userNumber}`
    );

    console.log(`bulls: ${bulls}`, `cows: ${cows}`);
  }
}

startGame();
