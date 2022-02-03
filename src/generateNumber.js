export const generateNumber = () => {
  const number = [];
  let newNum = '';
  let i = 0;

  while (i < 4) {
    newNum = Math.ceil(Math.random() * 9);

    if (!number.includes(newNum)) {
      number[i] = newNum;
      i++;
    }
  }

  return number.join('');
};
