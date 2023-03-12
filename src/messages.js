'use strict';

const initialQuestion = '4 secret digits were generated, try to guess them: ';
const congratulateMessage = 'Congratulations! numbers are found!';
const incorrectTypeMessage = 'Please, type finite numbers: ';
const incorrectNumberMessage
  = `Number of digits is not correct, please type 4 digits: `;

const getBullCowsMessage = (bullsN, cowsN) => {
  const bull = bullsN > 1 ? 'bulls' : 'bull';
  const cow = cowsN > 1 ? 'cows' : 'cow';

  return `There are ${bullsN} ${bull} and ${cowsN} ${cow} try one more time: `;
};

module.exports = {
  initialQuestion,
  congratulateMessage,
  incorrectTypeMessage,
  incorrectNumberMessage,
  getBullCowsMessage,
};
