/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * Runtime: 76 ms, faster than 82.38% of JavaScript online submissions for Running Sum of 1d Array.
 * Memory Usage: 38.9 MB, less than 5.06% of JavaScript online submissions for Running Sum of 1d Array.
 */
var runningSum = function (nums) {
  const result = [];
  nums.reduce((acc, curValue, curIndex) => {
    if (curIndex === 1) result.push(acc);
    result.push(acc + curValue);
    return acc + curValue;
  });
  return result;
};

module.exports = runningSum;
