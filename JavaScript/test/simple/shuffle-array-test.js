const expect = require("chai").expect;
const shuffle = require("../src/simple/shuffle-array");

describe("Shuffle the Array", function () {
  it("[2, 5, 1, 3, 4, 7] 格式化 3 为 [2, 3, 5, 4, 1, 7]", function () {
    const nums = [2, 5, 1, 3, 4, 7],
      n = 3;

    expect(shuffle(nums, n)).to.be.deep.equal([2, 3, 5, 4, 1, 7]);
  });

  it("[1, 2, 3, 4, 4, 3, 2, 1] 格式化 4 为 [1, 4, 2, 3, 3, 2, 4, 1]", function () {
    const nums = [1, 2, 3, 4, 4, 3, 2, 1],
      n = 4;

    expect(shuffle(nums, n)).to.be.deep.equal([1, 4, 2, 3, 3, 2, 4, 1]);
  });

  it("[1, 1, 2, 2] 格式化 2 为 [1, 2, 1, 2]", function () {
    const nums = [1, 1, 2, 2],
      n = 2;

    expect(shuffle(nums, n)).to.be.deep.equal([1, 2, 1, 2]);
  });
});
