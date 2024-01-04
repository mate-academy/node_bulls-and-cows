'use strict';

const getBullsAndCows = (generatedNumber, userInput) => {
  const generatedNumberArray = generatedNumber.toString().split('');
  const userInputArray = userInput.split('');

  let bullsCount = 0;
  let cowsCount = 0;

  if (isNaN(+userInput)) {
    throw new Error('Please, enter a number');
  }

  if (userInput.length !== 4) {
    throw new Error('Please, enter a 4 digit number');
  }

  userInputArray.forEach(string => {
    const userInputIndex = userInputArray.indexOf(string);
    const generatedNumberIndex = generatedNumberArray.indexOf(string);

    if (userInputIndex === generatedNumberIndex) {
      bullsCount++;
    }

    if (
      generatedNumberArray.includes(string)
      && userInputIndex !== generatedNumberIndex
    ) {
      cowsCount++;
    }
  });

  // eslint-disable-next-line no-console
  return console.log(`
    Generated number: ${generatedNumber}
    Bulls: ${bullsCount}, Cows: ${cowsCount}
  `);
};

module.exports = { getBullsAndCows };
