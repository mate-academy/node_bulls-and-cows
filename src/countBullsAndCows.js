'use strict';

function countBullsAndCows(fourDigitRandom, enterNumber) {
  const toStringNum = enterNumber.toString();
  const toStringRandomNum = fourDigitRandom.toString();

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < toStringNum.length; i++) {
    if (toStringNum[i] === toStringRandomNum[i]) {
      bulls++;
      continue;
    }

    if (toStringRandomNum.includes(toStringNum[i])) {
      cows++;
    }
  }
  // eslint-disable-next-line no-console
  console.log(`${bulls} Bulls ${cows} Cows`);
}

module.exports = { countBullsAndCows };
