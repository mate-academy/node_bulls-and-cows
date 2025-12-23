const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askUser(question, callback) {
  rl.question(question, (answer) => {
    callback(answer);
  });
}

function printResult(bulls, cows) {
  // eslint-disable-next-line no-console
  console.log(`Bulls: ${bulls}, Cows: ${cows}`);
}

function closeInput() {
  rl.close();
}

module.exports = {
  askUser,
  printResult,
  closeInput,
};
