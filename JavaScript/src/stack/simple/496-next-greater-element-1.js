/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @result Runtime: 88 ms, faster than 45.51% of JavaScript online submissions for Next Greater Element I.
 * Memory Usage: 39 MB, less than 83.27% of JavaScript online submissions for Next Greater Element I.
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = [];
  nums1.forEach((num) => {
    // 从栈后检查
    let lessVal;
    for (let i = nums2.length - 1; i > -1; i--) {
      if (num < nums2[i]) lessVal = nums2[i];
      if (num === nums2[i]) return result.push(lessVal || -1);
    }
  });
  return result;
};
module.exports = nextGreaterElement;
