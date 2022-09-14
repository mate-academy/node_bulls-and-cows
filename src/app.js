'use strict';

const chalk = require('chalk');
const readline = require('readline');

let randomNumber = '';

// eslint-disable-next-line no-console
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = {
  start: `\n${chalk.black.bgGreen('Hello my dear player!')} `
    + 'I have been waiting for you. Try to guess the number!',
  question: chalk.cyan('\nType 4 different digits '
    + `(or type ${chalk.white('E')} for exit): `),
  incorrect: chalk.red('\nIncorrect input!'),
  bye: chalk.yellow('\nBye-bye!'),
  stats: (bulls, cows) => '\nYou have:'
    + (bulls
      ? '  ' + chalk.black.bgBlue(` ${bulls} bull${bulls > 1 ? 's ' : ' '}`)
      : ''
    )
    + (cows
      ? '  ' + chalk.black.bgMagenta(` ${cows} cow${cows > 1 ? 's ' : ' '}`)
      : ''
    )
    + (!bulls && !cows
      ? '  ' + chalk.black.bgWhite(' Nothing ')
      : ''
    ),
  win: chalk.magenta(`
${chalk.black.bgMagenta('   Congratulations! You are the   ')}
          _
         (_)
__      ___ _ __  _ __   ___ _ __
\\ \\ /\\ / / | '_ \\| '_ \\ / _ \\ '__|
 \\ V  V /| | | | | | | |  __/ |
  \\_/\\_/ |_|_| |_|_| |_|\\___|_|

`),
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomIntExcept = (min, max, except = []) => {
  do {
    const int = getRandomInt(min, max);

    if (!except.includes(int)) {
      return int;
    }
  } while (true);
};

const getBullsAndCows = input => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === randomNumber[i]) {
      bulls++;
    } else if (randomNumber.includes(input[i])) {
      cows++;
    }
  }

  return [bulls, cows];
};

const askQuestion = () => {
  rl.question(messages.question, (userInput) => {
    if (userInput === 'E' || userInput === 'e') {
      log(messages.bye);
      process.exit();
    }

    if (!(/^(?:(\d)(?!.*\1)){4}$/.test(userInput))) {
      log(messages.incorrect);
      askQuestion();

      return;
    }

    if (userInput === randomNumber) {
      log(messages.win);
      process.exit();
    }

    log(messages.stats(...getBullsAndCows(userInput)));
    askQuestion();
  });
};

[-1, 0, -1, -1].forEach((val, idx, arr) => {
  arr[idx] = getRandomIntExcept(
    0, 9,
    [...arr.slice(0, idx), ...arr.slice(idx + 1)],
  );
  randomNumber += arr[idx];
});

log(messages.start);
askQuestion();
