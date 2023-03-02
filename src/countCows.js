'use strict';

function countCows(inputNumber, gameNumber) {
  const inputNumberItems = inputNumber
    .toString().split('').map(Number);
  const gameNumberItems = gameNumber
    .toString().split('').map(Number);
  let cows = 0;

  gameNumberItems.forEach((item, index) => {
    if (item !== inputNumberItems[index] && inputNumberItems.includes(item)) {
      cows++;
    }
  });

  return cows;
}

module.exports = {
  countCows,
};
