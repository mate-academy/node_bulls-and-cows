'use strict';

const getCheckedPlayerNumber = require('./getPlayerNumber');
const getPcNumber = require('./getPcNumber');
const getResult = require('./getResult');

const runGame = async() => {
  const playersNumber = await getCheckedPlayerNumber();
  const pcNumber = getPcNumber;

  const { bulls, cows } = getResult(playersNumber, pcNumber);

  process.stdout.write(` PC number -> ${pcNumber}\n\n`);
  process.stdout.write(`You won ${bulls} bulls and ${cows} cows!\n\n`);
};

runGame();
