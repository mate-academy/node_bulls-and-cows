'use strict';

function bullsAndCows(row, input) {
  let bulls = 0;
  let cows = 0;

  input.forEach((item, i) => {
    if (item === row[i]) {
      bulls++;
    } else if (row.includes(item)) {
      cows++;
    }
  });

  return `Bulls - ${bulls} and Cows - ${cows}`;
}

module.exports = { bullsAndCows };
