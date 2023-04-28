/* eslint-disable no-console */
'use strict';

const checkNumbers = (
  terminal, generatedArr
) => terminal.question('Guess number: ', (number) => {
  if (String(number).length !== 4) {
    console.error('Wrong input, write 4 digits!!!');

    checkNumbers(terminal, generatedArr);
  } else {
    let generatedArrOfInput = String(number).split('');

    generatedArrOfInput = generatedArrOfInput.map((num, index, array) => {
      if (array[index] === generatedArr[index]) {
        return 'bull';
      } else if (generatedArr.find(n => n === num)) {
        return 'cow';
      } else {
        return 'wrong';
      }
    });

    console.log(
      `cows : ${generatedArrOfInput
        .filter(input => input === 'cow').length}`,
      `\nbulls : ${generatedArrOfInput
        .filter(input => input === 'bull').length}`);

    if (generatedArrOfInput.every(input => input === 'bull')
    && generatedArrOfInput.length !== 0) {
      console.log('You won');

      terminal.close();
    } else {
      checkNumbers(terminal, generatedArr);
    }
  }
});

module.exports = { checkNumbers };
