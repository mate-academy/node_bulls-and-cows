'use strict';

const validate = (userInput) => {
  if (userInput > 9999 || userInput < 1000) {
    // eslint-disable-next-line
    console.log('userInput - val 1', userInput);

    return false;
  }

  if (isNaN(userInput)) {
    // eslint-disable-next-line
    console.log('userInput - val 2', isNaN(userInput));

    return false;
  }

  return true;
};

module.exports = (validate);
