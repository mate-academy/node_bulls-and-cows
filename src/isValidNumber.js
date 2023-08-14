import { isUniqueArray } from './isUniqueArray.js';

const isValidNumber = (userNumber) => {
  if (!userNumber) {
    throw Error('Value cannot be empty');
  }

  if (isNaN(userNumber)) {
    throw Error('Value must be valid');
  }

  if (userNumber.length !== 4) {
    throw Error('Number of characters must be 4');
  }

  if (!isUniqueArray(userNumber.split(''))) {
    throw Error('Repeated numbers in an array are not allowed');
  }
};

export { isValidNumber };
