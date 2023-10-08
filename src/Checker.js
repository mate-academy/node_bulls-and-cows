'use strict';

function guess(userInput, randomDigit) {
  const checker = {
    'bulls': 0,
    'cows': 0,
  };

  if (userInput === randomDigit) {
    return 'won';
  }

  const randomNums = randomDigit.toString().split('');
  const userNums = userInput.toString().split('');

  for (let i = 0; i < 4; i++) {
    if (randomNums.includes(userNums[i])) {
      if (randomNums.indexOf(userNums[i]) === i) {
        checker.bulls++;
      } else {
        checker.cows++;
      }
    }
  }

  return checker;
}

module.exports = { guess };
