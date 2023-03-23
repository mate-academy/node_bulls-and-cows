/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { getRandomNumbers } = require('./getRandomNumbers');
const { calculator } = require('./calculator');

const randomNumber = getRandomNumbers();

const game = () => {
  terminal.question('Could you guess a number? ', (reply) => {
    const userReply = +reply;

    if (reply.length !== 4) {
      console.log('Please enter exactly 4 different digits...');
      terminal.question('Could you guess a number? ', game);

      return;
    }

    const result = calculator(randomNumber, userReply);
    const { bulls, cows } = result;

    if (bulls === 4) {
      console.log('Congratulations! You are the ***WINNER***!');
      terminal.close();

      return;
    }

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    game();
  });
};

const gameInitMessage = () => {
  console.log('Welcome to "BULLS & COWS" game\n'
  + '---Rules---\n'
  + '1) You should guess a number of 4 different digits\n'
  + '2) "Bull" means that guessed digit is on its place\n'
  + '3) "Cow" means that guessed digit exists in the number '
  + 'but the place is wrong\n'
  + '---GOOD LUCK---');
};

module.exports = {
  game,
  gameInitMessage,
};
