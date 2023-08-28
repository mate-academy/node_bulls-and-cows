// eslint-disable-next-line strict
const { checkNumber } = require('./generationNumbers');
const { calcBullsAndCows } = require('./calcBullsAndCows');
const renderResult = (hidNumber, number) => {
  if (checkNumber(number)) {
    // eslint-disable-next-line no-console
    console.log(calcBullsAndCows(hidNumber, number));
  } else {
    // eslint-disable-next-line no-console
    console.log('Invalid input. Please enter a valid number.');
  }
};

module.exports = {
  renderResult,
};
