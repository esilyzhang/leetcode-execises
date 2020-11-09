/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @result Runtime: 84 ms, faster than 46.70% of JavaScript online submissions for Intersection of Two Arrays.
 * Memory Usage: 40.2 MB, less than 22.32% of JavaScript online submissions for Intersection of Two Arrays.
 */
var intersection = function (nums1, nums2) {
  let tmp;
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  if (set2.size > set1.size) {
    tmp = set1;
    set1 = set2;
    set2 = tmp;
  }
  return [...set1].filter((item) => set2.has(item));
};
//------------------------------
// 1. 转换成集合 去重
// 2. 在集合元素多的集合中过滤另外集合的元素
module.exports = intersection;
