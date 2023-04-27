/* eslint-disable max-len */
'use strict';

const messages = {
  helloMessage: '\nWelcome, to the cows and bulls game! if you want to start, type yes --> \n',
  rulesMessage: 'Rules are simple. You need to enter 4-digit unique number.\n You have COWS and BULLS,\n a COW - means that there is a digit in your number exist,\n but it is on the wrong place, a BULL - means the correct number is in the right place',
  requireMessage: '\nPlease enter 4-digit unique number ',
  lengthError: `\nError: enter a 4-digit number`,
  uniqueError: '\nError: only unique digits are allowed',
  winMessage: 'YOU WIN!',
};

module.exports = { messages };
