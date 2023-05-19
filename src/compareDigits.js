'use strict';

function compareDigits(userDigit, guesDigit) {
  const digitArr = userDigit.toString().split('').map(num => +num);
  const guesDigitArr = guesDigit.toString().split('').map(num => +num);
  let bulls = 0;
  let cow = 0;

  for (let i = 0; i < digitArr.length; i++) {
    if (digitArr[i] === guesDigitArr[i]) {
      bulls++;
      continue;
    }

    const index = guesDigitArr.findIndex(num => digitArr[i] === num);

    if (index >= 0 && index !== i) {
      cow++;
    }
  }

  return {
    status: bulls === 4,
    returnAnswer: `${bulls > 0 ? 'bulls: ' + bulls : ''}`
      + `${bulls > 0 & cow > 0 ? ', ' : ''}`
      + `${cow > 0 ? 'cow: ' + cow : ''}`,
  };
}

module.exports = {
  compareDigits,
};
