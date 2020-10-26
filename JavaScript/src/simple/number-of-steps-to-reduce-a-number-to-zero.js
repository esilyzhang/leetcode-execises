/**
 * @param {number} num
 * @return {number}
 */
/**
 * Runtime: 76 ms, faster than 78.23% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
 * Memory Usage: 38.5 MB, less than 36.60% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
 */
var numberOfSteps = function (num) {
  let count = 0;
  function step(curNum) {
    if (curNum) {
      count++;
      if (curNum % 2 === 0) {
        step(curNum / 2);
      } else {
        step(curNum - 1);
      }
    }
  }
  step(num);
  return count;
};
module.exports = numberOfSteps;
