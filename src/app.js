const readline = require('readline');
const generateNumber = require('./generateNumber');
const validateInput = require('./validateInput');
const countBullsAndCows = require('./countBullsAndCows');

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

    const { bulls } = countBullsAndCows(secretNumber, input);

    if (bulls === 4) {
      terminal.close();
    } else {
      ask();
    }
  });
}

ask();
