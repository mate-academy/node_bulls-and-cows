import { getGuess } from './getGuess.mjs';
import { gameOptions } from './app.mjs';

const errorMessageWrongNumberOfDigits = '4 different digits are required!\nPlease, enter your guess: ';

const errorMessageOnlyDigits = 'Only digits are allowed!\nPlease, enter your guess: ';

export const validateGuess = async (guess) => {
  let answer = null;

  switch (true) {
    case Number.isNaN(+guess):
      answer = await validateGuess(await getGuess(errorMessageOnlyDigits));
      break;

    case guess.length !== gameOptions.level:
      answer = await validateGuess(
        await getGuess(errorMessageWrongNumberOfDigits),
      );
      break;

    default:
      answer = guess;
  }

  return answer;
};
