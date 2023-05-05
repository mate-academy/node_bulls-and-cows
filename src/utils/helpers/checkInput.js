'use strict';

const checkInput = (length, string) => {
  const regex = new RegExp(`^(?!.*(.).*\\1)\\d{${length}}$`);

  return regex.test(string);
};

exports.checkInput = checkInput;
