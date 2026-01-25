const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function write(text) {
  process.stdout.write(text);
}

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

async function run() {
  const secret = generateRandomNumber();

  write('Bulls & Cows\n');
  write('Guess a number of 4 different digits.\n\n');

  while (true) {
    const input = await ask('Your try: ');

    if (!checkIsValidUserInput(input)) {
      write('Invalid input. Enter 4 different digits.\n\n');
      continue;
    }

    const guess = Number(input);
    const { bulls, cows } = getBullsAndCows(guess, secret);

    write(`Bulls: ${bulls}, Cows: ${cows}\n\n`);

    if (bulls === 4) {
      write('You win! 🎉\n');
      break;
    }
  }

  rl.close();
}

run();
