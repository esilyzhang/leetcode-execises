const expect = require('chai').expect;
const runningSum = require('../../src/simple/running-sum-of-1d-array');
describe('runningSum[i] = sum(nums[0]...nums[i])', function () {
  it('[1,2,3,4] 应该输入 [1, 3, 6, 10]', function () {
    expect(runningSum([1, 2, 3, 4])).to.be.deep.equal([1, 3, 6, 10]);
  });

  it('[1,1,1,1,1] 应该输入 [1,2,3,4,5]', function () {
    expect(runningSum([1, 1, 1, 1, 1])).to.be.deep.equal([1, 2, 3, 4, 5]);
  });

  it('[3,1,2,10,1] 应该输入 [3,4,6,16,17]', function () {
    expect(runningSum([3, 1, 2, 10, 1])).to.be.deep.equal([3, 4, 6, 16, 17]);
  });
});
