/* eslint-disable no-console */
'use strict';

function calculator(userNumbers, generatorNumbers) {
  const generatorNumbersArray = generatorNumbers.toString().split('');

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userNumbers.length; i += 1) {
    const userNumber = userNumbers[i];
    const generatorNumber = generatorNumbersArray[i];

    if (userNumber === generatorNumber) {
      bulls += 1;
    }

    if (userNumber !== generatorNumber
      && generatorNumbersArray.includes(userNumber)) {
      cows += 1;
    }
  }

  console.log('-------------------');
  console.log(`You numbers is ${userNumbers}`);
  console.log('-------------------');
  console.log(`Bulls: ${bulls}`);
  console.log(`Cows: ${cows}`);
  console.log('-------------------');

  return bulls === 4;
}

module.exports = {
  calculator,
};
