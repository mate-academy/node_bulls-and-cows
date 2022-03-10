export const generateRandomNumber = (numSize) => {
  const numbers = [];
  let newNum = '';
  let i = 0;

  while (i < numSize) {
    newNum = Math.ceil(Math.random() * 9);

    if (!numbers.includes(newNum)) {
      numbers.push(newNum);
      i++;
    }
  }

  return numbers.join('');
};
