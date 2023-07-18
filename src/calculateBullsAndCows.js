const correctWordInPlural = (quantity, word) => {
  return quantity > 1 ? `${word}s` : word;
}

export const calculateBullsAndCows = (userInput, generatedNumber) => {
  const res = [];
  const updatedUserInput = userInput.split('');
  const updatedGeneratedNumber = generatedNumber.split('');

  if (userInput.length < 4 || userInput.length > 4) {
    throw new Error('The number should contain 4 digits');
  }

  if (new Set(userInput).size !== userInput.length) {
    throw new Error('All digits should be unique');
  }

  for (let i = 0; i < 4; i++) {
    if (updatedGeneratedNumber[i] === updatedUserInput[i]) {
      res.push('bull')
      continue;
    }

    if (updatedGeneratedNumber.includes(updatedUserInput[i])) {
      res.push('cow')
    }
  }

  const numberOfBulls = res.filter(value => value === 'bull').length;
  const numberOfCows = res.filter(value => value === 'cow').length;
  const preparedBulls = `${numberOfBulls > 0 ? `${numberOfBulls} ${correctWordInPlural(numberOfBulls, 'bull')}` : ''}`;
  const preparedCows = `${numberOfCows > 0 ? `${numberOfCows} ${correctWordInPlural(numberOfCows, 'cow')}` : ''}`;

  if (numberOfBulls === 0 && numberOfCows === 0) {
    console.log('You did not hit any of bulls or cows');
  } else {
    console.log(`${numberOfBulls === 0 ? preparedCows : `${preparedBulls} ${preparedCows}`}`);
  }
}
