'use strict';

const { compareDigits } = require('./modules/compareDigits');
const { createRandomDigits } = require('./modules/randomNums');
const { checkingUserValue } = require('./modules/checkingUserValue');
const { endOfTheGame } = require('./modules/endOfTheGame');

const cattle = createRandomDigits();
const history = [];
let attempts = 0;

function startGame(app, rl) {
  const question = 'Enter your guess (4-digit number): ';

  rl.question(question, (answer) => {
    const checking = checkingUserValue(answer, rl);

    if (!checking) {
      return app();
    }

    const comparing = compareDigits(cattle, answer);

    history.push({ ...comparing, step: answer });
    attempts++;

    return endOfTheGame(comparing, attempts, history, app);
  });
}

module.exports.startGame = startGame;
