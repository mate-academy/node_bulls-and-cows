'use strict';

function getAnimals(random, input) {
  const animals = {
    bull: 0,
    cows: 0,
  };

  if (input.length > 4 || (/[a-z]/gi).test(input)) {
    return 'Oops! Please enter 4 numbers';
  }

  for (let i = 0; i < random.length; i++) {
    if (random[i] === Number(input[i])) {
      animals['bull'] = (animals['bull']) + 1;
      break;
    }

    if (random.includes(Number(input[i]))) {
      animals['cows'] = (animals['cows']) + 1;
      break;
    }
  }

// eslint-disable-next-line
  console.table([animals]);
}

module.exports = {
  getAnimals,
};
