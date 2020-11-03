/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 * @result Runtime: 72 ms, faster than 87.00% of JavaScript online submissions for Create Target Array in the Given Order.
 * Memory Usage: 37.9 MB, less than 7.36% of JavaScript online submissions for Create Target Array in the Given Order.
 */
var createTargetArray = function (nums, index) {
  const target = [];
  for (let i = 0; i < nums.length; i++) {
    if (index[i] < target.length) {
      for (let j = target.length - 1; j >= index[i]; j--) {
        target[j + 1] = target[j];
      }
    }
    target[index[i]] = nums[i];
  }
  return target;
};
module.exports = createTargetArray;
