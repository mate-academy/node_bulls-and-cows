'use strict';

function guss(trueValue, inp) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < trueValue.length; i++) {
    if (trueValue.includes(inp[i])) {
      cows++;
    }

    if (trueValue[i] === inp[i]) {
      bulls++;
      cows--;
    }
  }

  return `${bulls} - bulls and ${cows} - cows`;
}

module.exports = { guss };
