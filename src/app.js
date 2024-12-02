'use strict';

const readline = require('node:readline');
const { stdin, stdout, exit } = require('node:process');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const PROMPT_MESSAGE = 'Write 4 digits: \n';
const INVALID_INPUT_MESSAGE = 'The input must be 4 uniq digits: \n';
const TRY_AGAIN_MESSAGE = 'Need to try one more time: \n';
const WIN_MESSAGE = 'You win! The correct answer is';

const input = readline.createInterface({ input: stdin, output: stdout });
const answer = generateRandomNumber();

stdout.write(PROMPT_MESSAGE);

input.on('line', (text) => {
  if (!checkIsValidUserInput(text)) {
    stdout.write(INVALID_INPUT_MESSAGE + PROMPT_MESSAGE);
  }

  const { bulls, cows } = getBullsAndCows(text, answer);

  if (bulls === 4) {
    stdout.write(`${WIN_MESSAGE} ${text}`);
    input.close();
    exit();
  }

  stdout.write(`{bulls: ${bulls}, cows: ${cows}} \n${TRY_AGAIN_MESSAGE}`);
});
