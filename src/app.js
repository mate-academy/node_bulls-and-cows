/* eslint-disable no-console */
'use strict';

const { calculateRound } = require('./calculateRound');
const { inquier } = require('./inquier');
const { randomNumber } = require('./randomNumber');

const app = async() => {
  let quess;
  const number = randomNumber;

  while (quess !== number) {
    quess = await inquier();

    if (quess.length !== 4) {
      continue;
    }

    console.log(
      calculateRound(quess, number),
    );
  }

  console.log('Correct quess!');
};

app();
