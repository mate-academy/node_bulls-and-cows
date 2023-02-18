'use strict';

module.exports = {
  calculateRound: (quess, number) => {
    let result = '';

    for (let i = 0; i < 4; i++) {
      if (quess[i] === number[i]) {
        result += 'bull';
      } else if (number.includes(quess[i])) {
        result += 'cow';
      }

      if (i !== 3) {
        result += ' ';
      }
    }

    return result;
  },
};
