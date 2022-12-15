/* eslint-disable no-console */
'use strict';

function checkResult(currentNumber, answerNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < currentNumber.length; i++) {
    if (currentNumber.includes(answerNumber[i])
      && answerNumber[i] === currentNumber[i]
    ) {
      bulls++;
    } else {
      cows++;
    }
  }

  return console.log(`${bulls} - bulls and ${cows} - cows`);
}

module.exports = { checkResult };
