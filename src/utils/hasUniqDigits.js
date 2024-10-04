function hasUniqDigits(num) {
  const numStr = String(num);
  const uniqDigits = new Set(numStr);

  return uniqDigits.size === numStr.length;
}

module.exports = { hasUniqDigits };
