/* eslint-disable no-console */
export const calculateBullsCows = (compArray, userInput) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (+userInput[i] === compArray[i]) {
      bulls += 1;

      continue;
    }

    if (compArray.includes(+userInput[i])) {
      cows += 1;
    }
  }

  console.log(`There are ${bulls} bulls and ${cows} cows`);
};
