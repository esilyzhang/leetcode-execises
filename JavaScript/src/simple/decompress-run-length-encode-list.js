/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [],
    index = 0;
  for (let i = 0; i < nums.length; i += 2) {
    let endPosition = index + nums[i];
    result.fill(nums[i + 1], index + 1, endPosition);
    index = endPosition;
  }
  return result;
};
module.exports = decompressRLElist;
