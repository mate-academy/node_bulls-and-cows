/* eslint-disable no-console */
'use strict';

const { inputValidator } = require('./inputValidator');

const cowBullCalculator = (number, userNumber) => {
  let cowCount = 0;
  let bullCount = 0;

  for (const n of userNumber) {
    if (number.indexOf(n) === userNumber.indexOf(n)) {
      bullCount++;
    }

    if (number.indexOf(n) !== userNumber.indexOf(n) && number.includes(n)) {
      cowCount++;
    }
  }

  if (!inputValidator(userNumber)) {
    return;
  }

  const cowMessage = cowCount > 1
    ? 'cows'
    : 'cow';
  const bullMessage = bullCount > 1
    ? 'bulls'
    : 'bull';

  bullCount === 4
    ? console.log('Congratulate! You guess the number!')
    : console.log(`${cowCount} ${cowMessage} and ${bullCount} ${bullMessage}`);
};

module.exports = { cowBullCalculator };
