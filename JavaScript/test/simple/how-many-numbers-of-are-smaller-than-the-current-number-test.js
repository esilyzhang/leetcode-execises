const expect = require('chai').expect;
const smallerNumbersThanCurrent = require('../../src/simple/how-many-numbers-of-are-smaller-than-the-current-number');

describe('', function () {
  it('[8, 1, 2, 2, 3] 对应比自己小的元素的结果 [4, 0, 1, 1, 3]', function () {
    const nums = [8, 1, 2, 2, 3];
    const result = [4, 0, 1, 1, 3];

    expect(smallerNumbersThanCurrent(nums)).to.deep.equal(result);
  });

  it('[6, 5, 4, 8] 对应比自己小的元素的结果 [2, 1, 0, 3]', function () {
    const nums = [6, 5, 4, 8];
    const result = [2, 1, 0, 3];

    expect(smallerNumbersThanCurrent(nums)).to.deep.equal(result);
  });

  it('[7, 7, 7, 7] 对应比自己小的元素的结果 [0, 0, 0, 0]', function () {
    const nums = [7, 7, 7, 7];
    const result = [0, 0, 0, 0];

    expect(smallerNumbersThanCurrent(nums)).to.deep.equal(result);
  });
});
