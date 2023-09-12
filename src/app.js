'use strict';

const bullsAndCows = require('commander');

const clear = require('clear');

const inquire = require('./inquire');
const generate = require('./utils/random');
const count = require('./utils/count');
const print = require('./print');

bullsAndCows
  .command('start')
  .description('Start game')
  .action(async() => {
    clear();
    print.start();

    const winner = generate.arrayOf4RandomDigits();

    while (true) {
      const { digits } = await inquire.askForUserDigits();
      const normalized = digits.split('').map((el) => Number(el));

      const { bulls, cows } = count.bullsCowsQuantity(winner, normalized);

      if (bulls === 4) {
        print.win();
        process.exit();
      }

      print.result(bulls, cows);
    }
  });

bullsAndCows.parse(process.argv);

if (!bullsAndCows.args.length) {
  bullsAndCows.help();
}
