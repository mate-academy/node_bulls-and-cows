'use strict';

const figure = (generatedNum, userNum) => {
  const generatedNumString = generatedNum.toString();
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (userNum[i] === generatedNumString[i]) {
      bulls++;
    } else if (generatedNumString.includes(userNum[i].toString())) {
      cows++;
    }
  }

  return `<< You are getting close, bulls ${bulls}, cows ${cows} >>`;
};

module.exports = { figure };
