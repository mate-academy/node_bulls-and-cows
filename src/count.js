'use strict';

module.exports = {
  bullsCowsQuantity: function(win, userInput) {
    const result = {
      bulls: 0,
      cows: 0,
    };

    for (let i = 0; i < userInput.length; i++) {
      if (win[i] === userInput[i]) {
        result.bulls += 1;
        continue;
      }

      if (win.includes(userInput[i])) {
        result.cows += 1;
      }
    }

    return result;
  },
};
