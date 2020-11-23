const expect = require('chai').expect;
const nextGreaterElement = require('../../../src/stack/simple/496-next-greater-element-1');
describe('寻找数字后面比其大的第一个值', function () {
  it('4, 1, 2 在 1, 3, 4, 2 中找到下一个比自己小的 -1, 3, -1', function () {
    const nums1 = [4, 1, 2],
      nums2 = [1, 3, 4, 2];
    const result = [-1, 3, -1];
    expect(nextGreaterElement(nums1, nums2)).to.be.deep.equal(result);
  });
  it('2,4 在 1,2,3,4 中找到下一个比自己小的 3,-1', function () {
    const nums1 = [2, 4],
      nums2 = [1, 2, 3, 4];
    const result = [3, -1];
    expect(nextGreaterElement(nums1, nums2)).to.be.deep.equal(result);
  });
});
