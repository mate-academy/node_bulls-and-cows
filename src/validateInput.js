function validateInput(inputNumber) {
  const validationResult = [];

  const isFourDigits = inputNumber.length === 4;

  if (!isFourDigits) {
    validationResult.push('The length of your number should be equal to 4');
  }

  const isInputWithSymbols = inputNumber
    .split('')
    .every((digit) => !isNaN(+digit));

  if (!isInputWithSymbols) {
    validationResult.push('Input should only consist of digits');
  }

  return validationResult.join(' & ');
}

module.exports = validateInput;
