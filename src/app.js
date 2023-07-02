'use strict';

const { generator } = require('./generator');
const {
  askQuestion,
  sendMessage,
  messageObj,
  endinteraction,
} = require('./terminal');
const { checkBullsAndCows } = require('./bullsAndCows');

const startGame = async() => {
  const randomNumber = generator();
  let isContinues = true;

  while (isContinues) {
    const numberFromUser = await askQuestion(messageObj.enter);

    if (numberFromUser.length !== 4) {
      continue;
    }

    const bulls = checkBullsAndCows(randomNumber, numberFromUser);

    if (bulls[0] === 4) {
      isContinues = false;
      sendMessage(messageObj.win);
      endinteraction();
    } else {
      sendMessage(messageObj.bullAndCows(bulls));
    }
  }
};

startGame();
