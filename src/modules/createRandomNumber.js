const createRandomNumber = () => {
  const result = [];

  while (result.length < 4) {
    const num = Math.floor(1 + Math.random() * 9);

    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result.join('');
};

export default createRandomNumber;
