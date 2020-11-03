/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 * @result Runtime: 76 ms, faster than 67.21% of JavaScript online submissions for XOR Operation in an Array.
 * Memory Usage: 38.7 MB, less than 30.50% of JavaScript online submissions for XOR Operation in an Array.
 */
var xorOperation = function (n, start) {
  let result;
  for (let i = 0; i < n; i++) {
    result ^= start + 2 * i;
  }
  return result;
};

module.exports = xorOperation;
