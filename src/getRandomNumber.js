const getRandomNumber = () => {
  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numbers = [];

  while (numbers.length !== 4) {
    const currnetNumber = Math.floor(Math.random() * numbersArray.length);

    if (!numbers.includes(currnetNumber)) {
      numbers.push(currnetNumber);
    }
  }

  return numbers.join('');
};

export { getRandomNumber };
