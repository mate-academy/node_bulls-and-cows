'use strict';

const bullsAndCows = (generated, entered) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i <= entered.length; i++) {
    if (generated[i] === entered[i]) {
      bulls++;

      continue;
    }

    if (generated.includes(entered[i])) {
      cows++;
    }
  }

  return `Bulls: ${bulls}, cows: ${cows}`;
};

module.exports = { bullsAndCows };
