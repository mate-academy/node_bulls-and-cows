'use strict';

const { sleep } = require('./delay');

/* eslint no-console: ["error", { allow: ["log"] }] */

async function message(attemptsCounter, userName, level) {
  if (attemptsCounter === 1) {
    level === 'HARD'
      ? console.log(`
    ***Starting HARD-made game for serious payer!***
      `)
      : console.log(`
    ***Starting children-made game!***
      `);

    const loader = loadingAnimation();

    setInterval(() => {
      clearInterval(loader);
    }, 3000);
    await sleep(3000);
  }

  if (attemptsCounter === 2) {
    console.log(`
  > Farmer: Good start ${userName}!`);
    await sleep(1000);
  }

  if (attemptsCounter % 5 === 0) {
    console.log(`
  > Farmer: Keep paying ${userName}!`);
    await sleep(500);
  }

  if (attemptsCounter % 6 === 0) {
    console.log(`

  > Farmer: Are you kidding me ${userName}?`);
    await sleep(1000);
  }

  if (attemptsCounter === 7) {
    console.log(`
  > Farmer: What's the plan ${userName}?`);
    await sleep(1000);
  }

  if (attemptsCounter === 11) {
    console.log(`
  > Farmer: Oh man, maybe it's too hard for you?`);
    await sleep(1000);
  }

  if (attemptsCounter === 15) {
    console.log(`
  > Farmer: Leave it! You can't deal with it!`);
    await sleep(1000);
  }

  if (attemptsCounter === 20) {
    console.log(`
  > Farmer: What the hell is going on here? You're wasting my time!`);
    await sleep(1000);
  }
}

function loadingAnimation(
  text = 'Loading: ',
  chars = ['⠙', '⠘', '⠰', '⠴', '⠤', '⠦', '⠆', '⠃', '⠋', '⠉'],
  delay = 100
) {
  let x = 0;

  return setInterval(function() {
    process.stdout.write(text + ' ' + '\r' + chars[x++]);
    x = x % chars.length;
  }, delay);
}

module.exports = {
  message,
};
