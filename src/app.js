/* eslint-disable no-console */

import createRandomNumber from './modules/createRandomNumber.js';
import hasUniqueDigits from './modules/hasUniqueDigits.js';
import terminalPromptHandler from './modules/terminalPromptHandler.js';
import calculatingBullsAndCows from './modules/calculatingBullsAndCows.js';

const randomNumber = createRandomNumber();
let userNumber = '';
let isNeedRefresh = true;

const setUserNumber = (str) => {
  userNumber = str;
  isNeedRefresh = true;
};

const finishGame = () => {
  console.log('You are win!');
  setTimeout(() => {
    console.log('Good day!');

    setTimeout(() => {
      process.exit()
    }, 500)
  }, 500)
};

const processGame = async () => {
  while (userNumber !== randomNumber) {

    if (userNumber === '') {
      await terminalPromptHandler(
        '---Hello!---\n---Let\'s go!---\nPlease write 4 different digits - ',
        setUserNumber,
      );
    } else if (hasUniqueDigits(userNumber)) {
      const { bulls, cows } = calculatingBullsAndCows(userNumber, randomNumber);

      console.log(`Buls ${bulls}, cows ${cows}`);

      await terminalPromptHandler(
        'Please write new numbers - ',
        setUserNumber,
      );
    } else {
      await terminalPromptHandler(
        'Please write correct 4 different digits - ',
        setUserNumber,
      );
    }
  }

  finishGame();
};

processGame();
