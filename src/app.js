const readline = require('readline');
const { generateNumber } = require('./modules/generateNumber');
const { validateInput } = require('./modules/validateInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateNumber();

function ask() {
  terminal.question('Enter 4 different digits: ', (input) => {
    if (!validateInput(input)) {
      ask();

      return;
    }

    const { bulls, cows } = getBullsAndCows(input, secretNumber);

    /* eslint-disable no-console */
    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      terminal.close();
    } else {
      ask();
    }
  });
}

ask();
