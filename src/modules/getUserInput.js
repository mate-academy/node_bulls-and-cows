const { createInterface } = require('readline/promises');
const { checkIsValidUserInput } = require('./checkIsValidUserInput');

const terminal = createInterface(process.stdin, process.stdout);

async function getUserInput() {
  while (true) {
    const digits = await terminal.question(
      'Input just four different digits: ',
    );

    const ok = checkIsValidUserInput(digits);

    if (ok) {
      return digits.trim();
    }

    // eslint-disable-next-line no-console
    console.log(
      'The input must contain exactly four distinct digits! Try again! ',
    );
  }
}

module.exports = {
  getUserInput,
  terminal,
};
