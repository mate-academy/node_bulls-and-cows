export const generateNumber = (length, min, max) => {
  const computerNumbers = [];

  while (computerNumbers.length < length) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    if (!computerNumbers.includes(randomNumber)) {
      computerNumbers.push(randomNumber);
    }
  }

  return computerNumbers.join('');
};
