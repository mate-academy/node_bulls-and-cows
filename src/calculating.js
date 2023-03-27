'use strict';

const calculating = (input, n) => {
  const inputArr = input.split('');
  const generatedNumberArr = n.toString().split('');
  let bullsCount = 0;
  let cowsCount = 0;

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === generatedNumberArr[i]) {
      bullsCount += 1;
    } else if (inputArr[i] !== generatedNumberArr[i]
      && generatedNumberArr.includes(inputArr[i])) {
      cowsCount += 1;
    }
  }

  const cowsResult = (cowsCount > 0) ? `${cowsCount} cows` : '';
  const bulsResult = (bullsCount > 0) ? `${bullsCount} bulls` : '';
  const result = (bullsCount || cowsCount)
    ? `You've got: ${bulsResult} ${cowsResult}`
    : `No hits`;

  return result;
};

module.exports = { calculating };
