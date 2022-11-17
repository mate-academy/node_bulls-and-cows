// You may think that I invented a bicycle
export default function generateSecretNumber(initial) {
  let guessNumber = initial;
  let count = 0;

  const generateNumber = () => {
    guessNumber += Math.round(9 * Math.random());
    count++;

    if (count === 4) {
      return guessNumber;
    }

    return generateNumber;
  };

  return generateNumber;
};
