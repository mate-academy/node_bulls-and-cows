'use strict';

function countBulls(inputNumber, gameNumber) {
  const inputNumberItems = inputNumber
    .toString().split('').map(Number);
  const gameNumberItems = gameNumber
    .toString().split('').map(Number);
  let bulls = 0;

  gameNumberItems.forEach((item, index) => {
    if (item === inputNumberItems[index]) {
      bulls++;
    }
  });

  return bulls;
}

module.exports = {
  countBulls,
};
