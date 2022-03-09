'use strict';
import readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import generatedNumber from './number-generator.js';
import bullAndCowsCounter from './bull-and-cows-counter.js';

const terminal = readline.createInterface({ input, output });

terminal.question('Can you guess numbers?: ', (input) => {
  console.log(bullAndCowsCounter(generatedNumber, input));
  terminal.close();
})

