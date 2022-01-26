'use strict';

export default function bullsAndCows(gameNumber, userNumber) {
  const animals = {
    bull: 0,
    cow: 0,
  };
  const input = userNumber.toString().split("");
  const numberToGuess = gameNumber.toString().split("");

  const cowCounterArray = [];

  if (input.length !== 4 || new Set(userNumber).size !== input.length) {
    return "Oops! Please enter 4 numbers";
  }

  for (let i = 0; i < numberToGuess.length; i++) {
    if (numberToGuess[i] == input[i]) {
      animals.bull++;
    } else {
      cowCounterArray.push(input[i]);
    }
  }

  for (let i = 0; i < numberToGuess.length; i++) {
    if (numberToGuess.includes(cowCounterArray[i])) {
      animals.cow++;
    }
  }

  return animals;
}
