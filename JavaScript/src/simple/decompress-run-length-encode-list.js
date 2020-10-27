/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * Runtime: 96 ms, faster than 72.80% of JavaScript online submissions for Decompress Run-Length Encoded List.
 * Memory Usage: 42.5 MB, less than 11.28% of JavaScript online submissions for Decompress Run-Length Encoded List.
 */
var decompressRLElist = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      result.push(nums[i + 1]);
    }
  }
  return result;
};
module.exports = decompressRLElist;
