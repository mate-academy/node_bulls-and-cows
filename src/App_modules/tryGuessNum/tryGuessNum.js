export const tryGuessNum = (secret, calculating, rl) => {
  rl.question('Please enter a number: ', (inputNumber) => {
    // console.log(`Your number is: ${inputNumber}`)
    const guess = inputNumber;

    if (guess.split('').some(dig => isNaN(+dig))) {
      console.log(`Your number is wrong: ${guess}, `,
        'Please use only numbers');
        tryGuessNum(secret, calculating, rl);
    } else if ((guess.length !== 4) && guess.split('').every(dig => !isNaN(+dig))) {
      console.log(`Your number is wrong: ${guess}, `,
        'Please enter four-digit number');
        tryGuessNum(secret, calculating, rl);
    } else {
      calculating(secret, guess)
        ? rl.close()
        : tryGuessNum(secret, calculating, rl);
    }







  });
};
