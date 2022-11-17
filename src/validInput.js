export default function validInput(guess) {
  if (guess.length !== 4) {
    return 'Guessed number format is XXXX, try again: ';
  } else if (isNaN(guess)) {
    return 'Symbols not allowed, try again: ';
  }

  return '';
}
