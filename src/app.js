'use strict';

/* eslint no-console: ["error", { allow: ["log"] }] */

const Selector = require('node-option');
const readline = require('readline');
const { sleep } = require('./utils/delay');
const { rules } = require('./components/rules');

const { bullsAndCows } = require('./components/game');

(async function askName() {
  console.log(`
        ||  ||  ||||||  ||      ||       |||||
        ||||||  ||==    ||      ||      ||   ||
        ||  ||  ||||||  ||||||  ||||||   |||||
  `);

  await sleep(1500);

  rules();

  await sleep(1000);

  console.log(`
  > Farmer: I'm a farmer!
  `);

  await sleep(1500);

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question(`
  > Farmer: What's your name stranger?


  > `, async userName => {
    terminal.close();

    console.log(`
  > Farmer: Nice to meet you ${userName || 'no_name_player'}!
    `);

    await sleep(1000);

    console.log(`
  > Farmer: OK ${userName
      || 'no_name_player'}, let's choose the level of difficulty!

    `);

    const selector = new Selector({
      markWrapperColor: 'blue',
      checkedMarkColor: 'white',
      textColor: 'yellow',
      multiselect: false,
      highlight: true,
    });

    const result = selector
      .add('HARD')
      .add('FOR CHILDREN')
      .render();

    result.then(async(value) => {
      await sleep(1000);

      if (value.length === 0) {
        console.log(
          `   ***You didn't choose any level, then it will be 'FOR CHILDREN'***
          `
        );

        await sleep(1000);
      }

      if (value[0] === 'HARD') {
        console.log(`
  > Farmer: WOW ${userName}, you are so self-confident!
  `);
      } else {
        console.log(`
  > Farmer: That's right dude, HARD level is too much for you! Go ahead ${
  userName}
  `);
      }
      await sleep(1000);

      await bullsAndCows(value[0], userName);
    }, () => {
      console.log(`
  > Farmer: You broke my game!
      `);
    });
  });
}());
