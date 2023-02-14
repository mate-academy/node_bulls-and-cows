'use strict';

const numberGenerator = () => {
  const number = [];

  while (number.length < 4) {
    const generatedNumber = Math.floor(Math.random() * 10);

    if (!number.includes(generatedNumber)) {
      number.push(generatedNumber);
    }
  }

  return number.join('');
};

module.exports = { numberGenerator };
