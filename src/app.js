'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (args) => new Promise((res) => terminal.question(args, res));

const generatedNumber = 1110//(Math.random().toFixed(4) * 10000);
const BULL = 'BULL';
const COW = 'COW';

function paramsValidation(args) {
  return args.length === 4 && Number.isInteger(+args[0]);
};

function checkRole(baseNumberArray, digitToFind, digitIndex) {
  let bull = false;
  let cow = false;

  baseNumberArray.forEach((number, index) => {
    if (number === digitToFind &&
      index === digitIndex) {
        bull = true;
      }

    if (number === digitToFind &&
      index !== digitIndex) {
        cow = true;
      } 
  });

  if (bull) {
    return BULL;
  } else if (cow) {
    return COW;
  } else {
    return '';
  }
}

function numberCheck(num) {
  let generatedNumberArray = generatedNumber.toString().split('');
  const numArray = num.toString().split('');
  const roles = [];
  const reservedRoles = [null, null, null, null];
  const totalNumbers = { bulls: 0, cows: 0 };

  numArray.forEach((digit, place) => {
    const role = checkRole(generatedNumberArray, digit, place);
    roles.push(role);
  });

  console.log(roles);

  roles.forEach(role => {
    switch(role) {
      case BULL:
        totalNumbers.bulls += 1;
        break;
      case COW:
        totalNumbers.cows += 1;
        break;
      default:
        break;
    }
  });

  return totalNumbers;
};

async function game(text) {
  const params = await question(text);

  try {
    if (!paramsValidation(params)) {
      terminal.write('Invalid entered parameters \n');
      game('Try again \n');
    } else {
      const { bulls, cows } = numberCheck(params);
  
      if (bulls === 4) {
        terminal.write('You win! \n');
        terminal.close();
      } else {
        terminal.write(`${cows === 1 ? 'cow' : 'cows'}: ${cows} ` +
          `${bulls === 1 ? 'bull' : 'bulls'}: ${bulls}\n`);

        game('Try again \n');
      }
    };
  } catch {
    terminal.write('Try again');
  }
};

game('Guess the number \n');
