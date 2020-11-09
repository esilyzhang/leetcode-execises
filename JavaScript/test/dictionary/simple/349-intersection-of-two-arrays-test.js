const expect = require('chai').expect;
const intersection = require('../../../src/dictionary/simple/349-intersection-of-two-arrays');

describe('求两个数组的交集', function () {
  it('[1, 2, 2, 1] 和 [2, 2] 的交集为 [2]', function () {
    const nums1 = [1, 2, 2, 1],
      nums2 = [2, 2];
    const result = [2];

    expect(intersection(nums1, nums2)).to.have.members(result);
  });

  it('[4,9,5] 和 [9,4,9,8,4] 的交集为 [9,4]', function () {
    const nums1 = [4, 9, 5],
      nums2 = [9, 4, 9, 8, 4];
    const result = [9, 4];

    expect(intersection(nums1, nums2)).to.have.members(result);
  });

  it('[4,9,5] 和 [9,4,9,8,4] 的交集为 [9,4]', function () {
    const nums1 = [4, 9, 5],
      nums2 = [9, 4, 9, 8, 4];
    const result = [9, 4];

    expect(intersection(nums1, nums2)).to.have.members(result);
  });
});
