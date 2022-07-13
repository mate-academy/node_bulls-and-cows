'use strict';

/* eslint-disable no-console */

const errorMessage = (userGuessLength, requiredLength) => 'Error: '
  + `Your geuss number must be${requiredLength} digits`
  + ` - you entered ${userGuessLength} digits`;

function validateInput(input, requiredLength) {
  if (input.length !== requiredLength) {
    console.log(errorMessage(input.length, requiredLength));

    return false;
  }

  return true;
}

module.exports.validateInput = validateInput;
