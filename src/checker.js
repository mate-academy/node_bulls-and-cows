'use strict';

function checkNums(nums1, nums2) {
  return nums2.map((num, i) => {
    if (nums1[i] === num) {
      return 'bull';
    }

    if (nums1.includes(num)) {
      return 'cow';
    }

    return '-';
  });
};

module.exports.checkNums = checkNums;
