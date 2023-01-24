const generateRandomNumber = () => {
  let numbers = "";

  while (numbers.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!numbers.includes(number)) {
      numbers += number;
    }
  }

  return numbers;
};

module.exports = { generateRandomNumber };
