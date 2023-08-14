const isUniqueArray = (array) => {
  const result = [];

  for (const number of array) {
    if (!result.includes(number)) {
      result.push(number);
    } else {
      return false;
    }
  }

  return true;
};

export { isUniqueArray };
