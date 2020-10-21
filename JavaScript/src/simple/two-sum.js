/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0,
    j,
    result = [];
  for (; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        result[0] = i;
        result[1] = j;
        break;
      }
    }
  }
  return result;
};

module.exports = twoSum;
