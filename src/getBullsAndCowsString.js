'use strict';

function getBullsAndCowsString(bulls, cows) {
  const bullString = bulls <= 1 ? 'bull' : 'bulls';
  const cowString = cows <= 1 ? 'cow' : 'cows';

  return `${bulls} ${bullString} and ${cows} ${cowString}`;
}

module.exports = {
  getBullsAndCowsString,
};
