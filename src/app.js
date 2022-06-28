/* eslint-disable no-console */
'use strict';

const randomizer = require('./modules/randomizer');
const { terminal } = require('./modules/userIO');
const calculateIncludes = require('./modules/calculateincludes');

const randNumber = randomizer.getNumberOfFourDiffDigits();
const includeCalc = calculateIncludes.calculateIncludes(randNumber);

function replDemo() {
  return new Promise((resolve, reject) => {
    terminal.setPrompt('Enter number of 4 unique digits> ');
    terminal.prompt();

    terminal.on('line', function(line) {
      const [isEqual, answer] = includeCalc(line);

      if (isEqual) {
        resolve(answer);
        terminal.close();
      } else {
        console.log(answer);
        terminal.prompt();
      }
    });
  });
}

async function run() {
  try {
    const replResult = await replDemo();

    console.log(replResult);
  } catch (e) {
    console.log('failed:', e);
  }
}

run();
