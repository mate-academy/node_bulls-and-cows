'use strict';

function checkAnswer(searchedNumber, userNumber) {
  let bulls = 0;
  let cows = 0;

  const userNumberArr = userNumber.split('');

  userNumberArr.forEach((num, index) => {
    if (searchedNumber.indexOf(num) === index) {
      bulls++;

      return;
    }

    if (searchedNumber.includes(num)) {
      cows++;
    }
  });

  return {
    bulls, cows,
  };
}

module.exports = { checkAnswer };
