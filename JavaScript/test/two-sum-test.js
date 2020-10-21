const expect = require("chai").expect;
const twoSum = require("../src/simple/two-sum");

describe("在数组中，寻找两数之和为指定值的两数下标", function () {
  it("应该通过金丝雀测试(Canady Test)", function () {
    expect(true).to.be.true;
  });
  it("[2, 7, 11, 15] 中对于和为 9 应该返回 [0, 1]", function () {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).to.deep.equal([0, 1]);
  });
  it("[2, 5, 7, 11, 15, 33] 中对于和为 26 应该返回 [3, 4]", function () {
    const nums = [2, 5, 7, 11, 15, 33];
    const target = 26;
    expect(twoSum(nums, target)).to.deep.equal([3, 4]);
  });
});
