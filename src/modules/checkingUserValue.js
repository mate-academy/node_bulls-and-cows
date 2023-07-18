'use strict';

const { cowsBullsLogger } = require('../services/log.service');

function checkingUserValue(answer, rl) {
  const symbols = [];

  for (const letter of answer) {
    if (!parseInt(letter) && letter !== '0') {
      cowsBullsLogger.wrongSymbol(letter);

      rl.close();

      return false;
    }

    if (symbols.includes(letter)) {
      cowsBullsLogger.theSameSymbol();

      rl.close();

      return false;
    } else {
      symbols.push(letter);
    }
  }

  if (answer.trim().length !== 4) {
    cowsBullsLogger.wrongLength();

    rl.close();

    return false;
  }

  rl.close();

  return true;
}

module.exports.checkingUserValue = checkingUserValue;
