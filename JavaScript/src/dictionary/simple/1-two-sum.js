/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @result Runtime: 104 ms, faster than 51.80% of JavaScript online submissions for Two Sum.
 * Memory Usage: 50.1 MB, less than 5.40% of JavaScript online submissions for Two Sum.
 */
var twoSum = function (nums, target) {
  const map = new Map();
  nums.forEach((item, index) => {
    map.set(target - item, index);
  });
  for (let i = 0; i < nums.length; i++) {
    let index = map.get(nums[i]);
    if (index !== i && map.has(nums[i])) {
      return [i, index];
    }
  }
};
module.exports = twoSum;
