'use strict';

function cowsCounter(computerNumber, userNumber) {
  let howManycows = 0;

  computerNumber.split('').forEach(element => {
    if (userNumber.includes(element)) {
      howManycows++;
    }
  });

  return howManycows;
};

module.exports = { cowsCounter };
