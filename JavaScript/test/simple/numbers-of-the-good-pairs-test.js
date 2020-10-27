const expect = require('chai').expect;
const numIdenticalPairs = require('../../src/simple/numbers-of-the-good-pairs');

describe('寻找合适的数字对数', function () {
  it('[1, 2, 3, 1, 1, 3] 应该有 4 对合适的', function () {
    const nums = [1, 2, 3, 1, 1, 3];

    expect(numIdenticalPairs(nums)).to.be.equal(4);
  });

  it('[1,1,1,1] 应该有 6 对合适的', function () {
    const nums = [1, 1, 1, 1];

    expect(numIdenticalPairs(nums)).to.be.equal(6);
  });

  it('[1,2,3] 应该有 0 对合适的', function () {
    const nums = [1, 2, 3];

    expect(numIdenticalPairs(nums)).to.be.equal(0);
  });
});
