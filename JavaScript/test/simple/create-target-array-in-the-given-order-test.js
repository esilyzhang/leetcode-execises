const expect = require('chai').expect;
const createTargetArray = require('../../src/simple/create-target-array-in-the-given-order');

describe('通过给定顺序创建数组', function () {
  it('给定 [0, 1, 2, 2, 1] 顺序的 [0, 1, 2, 3, 4] 为 [0, 4, 1, 3, 2]', function () {
    const nums = [0, 1, 2, 3, 4],
      index = [0, 1, 2, 2, 1];
    const result = [0, 4, 1, 3, 2];

    expect(createTargetArray(nums, index)).to.deep.equal(result);
  });
  it('给定 [0,1,2,3,0] 顺序的 [1,2,3,4,0] 为 [0,1,2,3,4]', function () {
    const nums = [1, 2, 3, 4, 0],
      index = [0, 1, 2, 3, 0];
    const result = [0, 1, 2, 3, 4];

    expect(createTargetArray(nums, index)).to.deep.equal(result);
  });
  it('给定 [0] 顺序的 [1] 为 [1]', function () {
    const nums = [1],
      index = [0];
    const result = [1];

    expect(createTargetArray(nums, index)).to.deep.equal(result);
  });
});
