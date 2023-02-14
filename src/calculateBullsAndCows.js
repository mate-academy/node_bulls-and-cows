'use strict';

function calculateBullsAndCows(secretNumber, userNumber) {
  const secretMap = {};

  for (const digit of secretNumber) {
    secretMap[digit] = secretMap[digit] || 0;
    secretMap[digit] += 1;
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userNumber.length; i++) {
    if (userNumber[i] === secretNumber[i] && secretMap[userNumber[i]] > 0) {
      bulls += 1;
      secretMap[userNumber[i]]--;
    }
  }

  for (let i = 0; i < userNumber.length; i++) {
    if (userNumber[i] !== secretNumber[i] && secretMap[userNumber[i]] > 0) {
      cows += 1;
      secretMap[userNumber[i]]--;
    }
  }

  return `bulls: ${bulls}, cows: ${cows}`;
}

exports.calculateBullsAndCows = calculateBullsAndCows;
