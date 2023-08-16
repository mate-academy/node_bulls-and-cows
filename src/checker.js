'use strict';

function checkNums(nums1, nums2) {
  const requiredLength = nums1.length;
  const uniquesLength = new Set(nums2).size;

  if (
    nums2.length !== requiredLength
      || uniquesLength !== requiredLength
  ) {
    return `Please, enter ${requiredLength} different digits!`;
  }

  const bullsAndCows = {
    bulls: 0,
    cows: 0,
  };

  nums2.forEach((num, i) => {
    if (nums1[i] === num) {
      bullsAndCows.bulls++;
    } else if (nums1.includes(num)) {
      bullsAndCows.cows++;
    }
  });

  if (bullsAndCows.bulls === requiredLength) {
    return 'You win!';
  }

  return `Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows}`;
};

module.exports.checkNums = checkNums;
