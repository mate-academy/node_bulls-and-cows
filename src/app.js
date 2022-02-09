'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (args) => new Promise((res) => terminal.question(args, res));
const DIGITS_COUNT = 4;

const generatedNumber = (Math.random().toFixed(DIGITS_COUNT) * 10000);
const BULL = 'BULL';
const COW = 'COW';

function paramsValidation(args) {
  return args.length === DIGITS_COUNT && Number.isInteger(+args[0]);
};

function roleCheck({
  generatedNumberArray, 
  digitToFind, 
  digitIndex
}) {
  let bullIndex = null;
  let cowIndex = null;

  generatedNumberArray.forEach((number, index) => {
    if (number === digitToFind &&
      index === digitIndex) {
        bullIndex = index;
        return;
      }

    if (number === digitToFind &&
      index !== digitIndex) {
        cowIndex = index;
        return;
      } 
  });

  if (bullIndex) {
    return { role: BULL, reservedIndex: bullIndex };
  } else if (cowIndex) {
    return { role: COW, reservedIndex: cowIndex };
  } else {
    return { role: null, reservedIndex: null };
  }
}

function numberCheck(num) {
  const generatedNumberArray = generatedNumber.toString().split('');
  const numArray = num.toString().split('');
  const foundRoles = new Array(DIGITS_COUNT).fill(null);
  const totalCount = { bulls: 0, cows: 0 };

  numArray.forEach((digit, place) => {
    const { role, reservedIndex } = roleCheck({
      generatedNumberArray,
      digitToFind: digit,
      digitIndex: place,
    });

    if (role && foundRoles[reservedIndex] !== BULL) {
      foundRoles.splice(reservedIndex, 1, role);
    }
  });

  foundRoles.forEach(role => {
    switch(role) {
      case BULL:
        totalCount.bulls += 1;
        break;
      case COW:
        totalCount.cows += 1;
        break;
      default:
        break;
    }
  });

  return totalCount;
};

async function game(text) {
  const params = await question(text);

    if (!paramsValidation(params)) {
      terminal.write('Invalid entered parameters \n');
      game('Try again \n');
    } else {
      const { bulls, cows } = numberCheck(params);
  
      if (bulls === DIGITS_COUNT) {
        terminal.write('You win! \n');
        terminal.close();
      } else {
        terminal.write(`${cows === 1 ? 'cow' : 'cows'}: ${cows} ` +
          `${bulls === 1 ? 'bull' : 'bulls'}: ${bulls} \n`);

        game('Try again ;) \n');
      }
    };
};

game('Guess the number \n');
