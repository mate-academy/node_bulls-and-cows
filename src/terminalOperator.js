const readline = require("readline");
const { resultChecker } = require("./resultChecker");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const terminalOperator = (message, randomNumber) => {
  terminal.question(message, (guess) => {
    if (
      guess.length !== 4 ||
      guess.split("").some((char) => Number.isNaN(+char)) ||
      new Set(guess).size !== randomNumber.length
    ) {
      console.log("Invalid guess \n");
      terminalOperator("Try again \n", randomNumber);
    } else {
      resultChecker(randomNumber, guess)
        ? terminal.close()
        : terminalOperator("Keep trying \n", randomNumber);
    }
  });
};

module.exports = { terminalOperator };
