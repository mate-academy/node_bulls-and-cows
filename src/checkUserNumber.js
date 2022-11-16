
export function checkUserNumber(userNumber) {
  if (!Number.isInteger(+userNumber)) {
    console.log('You entered not a number');

    return false;
  }

  if (userNumber.length !== 4) {
    console.log('You must write a four-digit number');

    return false;
  }

  return true;
};
