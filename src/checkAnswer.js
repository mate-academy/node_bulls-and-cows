'use strict';

function checkAnswer(searchedNumber, userNumber) {
  let bulls = 0;
  let cows = 0;

  const userNumberArr = userNumber.split('');

  for (let i = 0; i < 4; i++) {
    if (searchedNumber.includes(userNumberArr[i])) {
      if (searchedNumber.indexOf(userNumberArr[i]) === i) {
        bulls++;
      } else {
        cows++;
      }
    }
  }

  return [bulls, cows];
}

module.exports = { checkAnswer };
