
export const getRandom = () => {
  const result = [];

  while (true) {
    if (result.length === 4) {
      return result;
    }

    const randomInt = Math.ceil(Math.random() * 10);

    if (!result.includes(randomInt)) {
      result.push(randomInt);
    }
  }
};
