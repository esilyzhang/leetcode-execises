/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * Runtime: 124 ms, faster than 13.29% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 * Memory Usage: 44.5 MB, less than 5.85% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [];
  function count(num, index) {
    return nums.filter((n, i) => {
      return i !== index && n < num;
    }).length;
  }
  nums.forEach((num, index) => {
    result.push(count(num, index));
  });
  return result;
};
module.exports = smallerNumbersThanCurrent;
