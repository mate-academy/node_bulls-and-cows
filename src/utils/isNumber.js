'use stric';

function isNumber(number) {
  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    if (isNaN(el)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isNumber,
};
