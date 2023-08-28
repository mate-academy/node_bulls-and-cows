// eslint-disable-next-line strict
const generateRandomNumber = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits.splice(randomIndex, 1);

    result += digit;
  }

  return result;
};

const checkNumber = (n) => {
  const numStr = n.toString();
  const arrCheck = [];

  if (numStr.length !== 4) {
    return false;
  }

  for (let i = 0; i < numStr.length; i++) {
    if (arrCheck.includes(numStr[i])) {
      return false;
    }
    arrCheck.push(numStr[i]);
  }

  return true;
};

module.exports = {
  generateRandomNumber,
  checkNumber,
};
