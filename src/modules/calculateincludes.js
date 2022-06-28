'use strict';

function findIndexesOfChars(string) {
  const out = {};

  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);

    out[char] = i;
  }

  return out;
}

function checkForUnique(str) {
  const hashtable = {};

  for (let i = 0, len = str.length; i < len; i++) {
    if (hashtable[str[i]] != null) {
      hashtable[str[i]] = 1;

      return false;
    } else {
      hashtable[str[i]] = 0;
    }
  }

  return true;
}

function calculateIncludes(templateStr) {
  const template = templateStr;
  const charsPosition = findIndexesOfChars(templateStr);

  return (input) => {
    if ((input.length !== 4) || (!checkForUnique(input))) {
      return [false, 'Enter correct number!'];
    }

    if (input === template) {
      return [true, 'You won!'];
    } else {
      let counterCows = 0;
      let counterBulls = 0;

      for (let i = 0; i < input.length; i++) {
        if (charsPosition[input.charAt(i)] === i) {
          counterBulls++;
        } else if (Object.prototype.hasOwnProperty
          .call(charsPosition, input.charAt(i))) {
          counterCows++;
        }
      }

      return [false, `Bulls: ${counterBulls} Cows: ${counterCows}`];
    }
  };
}

module.exports = {
  calculateIncludes,
};
