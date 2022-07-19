import chalk from 'chalk';

export const calculateBullsAndCows = (generatedNumber, userNumber) => {
  const errorMessage = chalk.red('The number should be of 4 different digits');

  if (userNumber.length !== 4) {
    return errorMessage;
  }

  for (let i = 0; i < 4; i++) {
    const currentNumber = userNumber[i];

    if (userNumber.slice(i + 1, 4).includes(currentNumber)) {
      return errorMessage;
    }
  }

  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < 4; i++) {
    if (generatedNumber[i] === userNumber[i]) {
      result.bulls++;
    } else if (generatedNumber.includes(userNumber[i])) {
      result.cows++;
    }
  }

  return `${chalk.underline('Bulls')} = ${result.bulls} \n${chalk.underline(
    'Cows'
  )} = ${result.cows}`;
};
