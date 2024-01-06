const hasUniqueDigits = (value) => {
  const str = value.split('')
    .filter((num) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+num)).join('');

  return new Set(str).size === str.length && str.length === 4;
};

export default hasUniqueDigits;
