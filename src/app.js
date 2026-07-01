const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('node:readline');
const { stdin: input, stdout: output } = process;

const randomNum = generateRandomNumber();

const rl = readline.createInterface({ input, output });

const ask = (question) => {
  rl.question(question, (num) => {
    if (!checkIsValidUserInput(num)) {
      ask('Invalid input: enter 4 unique digits. Try again.');
    }

    const usetNum = Number(num);
    const { bulls, cows } = getBullsAndCows(usetNum, randomNum);

    if (bulls === 4) {
      process.stdout.write('🎉 You win!');
      rl.close();
      process.exit(0);
    } else {
      ask(`bulls: ${bulls}, cows: ${cows}, don't stop`);
    }
  });
};

ask('Guess the number');
