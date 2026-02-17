/* eslint-disable no-console */
function printInvalidInput() {
  console.log('Invalid input. Try again.');
}

function printResult(bulls, cows) {
  console.log(`Bulls: ${bulls}, Cows: ${cows}`);
}

function printWinMessage() {
  console.log('You won!');
}

module.exports = {
  printInvalidInput,
  printResult,
  printWinMessage,
};
