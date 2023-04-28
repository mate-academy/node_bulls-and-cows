'use strict';

function countResult(guess4 = 3456, random4 = [ 5, 9, 3, 7 ]) {
  const guessArray = String(guess4).split('').map(d => +d);
  const bulls = guessArray
    .filter((d, i) => random4.includes(d) && random4.indexOf(d) === i).length;
  const cows = guessArray
    .filter((d, i) => random4.includes(d) && random4.indexOf(d) !== i).length;

  return `\nYour result is ${bulls} BULLS and ${cows} COWS\n`;
}

module.exports = {
  countResult,
};
