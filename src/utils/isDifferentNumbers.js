export function isDifferentNumbers(number) {
  const obj = {};

  for (const num of number) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      return false;
    }
  }

  if (Object.keys(obj).length !== 4) {
    return false;
  }

  return true;
}
