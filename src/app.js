'use strict';

const readline = require('readline');
const { getRandomSet } = require('./getRandomSet.js');
const { calculatingLivestock } = require('./calculatingLivestock.js');

const currentGameDigits = getRandomSet();

const inputIsValid = (data) => {
  const trimData = data.trim();

  if (!/[0-9]{4}/.test(trimData)) {
    return false;
  }

  const inputSet = new Set();

  trimData.split('').forEach(el => inputSet.add(el));

  if (inputSet.size !== trimData.length) {
    return false;
  }

  return true;
};

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function closeInterface() {
  terminal.close();
  // eslint-disable-next-line no-console
  console.log('You win!)');
}

terminal.question('Enter your 4 digits  ', (playerNum) => {
  terminal.setPrompt('Enter your corrected 4 digits  ');

  const trimPlayerNum = playerNum.trim();

  if (!inputIsValid(playerNum)) {
    terminal.prompt();

    return;
  }

  if (currentGameDigits.join('') === trimPlayerNum) {
    closeInterface();

    return;
  }

  // eslint-disable-next-line no-console
  console.log(
    calculatingLivestock(currentGameDigits, trimPlayerNum.split(''))[1]
  );

  terminal.prompt();
});

terminal.on('line', function(playerNum) {
  const trimPlayerNum = playerNum.trim();

  if (!inputIsValid(playerNum)) {
    terminal.prompt();

    return;
  }

  if (currentGameDigits.join('') === trimPlayerNum) {
    closeInterface();

    return;
  }

  // eslint-disable-next-line no-console
  console.log(
    calculatingLivestock(currentGameDigits, trimPlayerNum.split(''))[1]
  );
  terminal.prompt();
});
