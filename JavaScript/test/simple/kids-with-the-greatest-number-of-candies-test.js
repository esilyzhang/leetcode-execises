const expect = require('chai').expect;
const kidsWithCandies = require('../../src/simple/kids-with-the-greatest-number-of-candies');

describe('判断能够成为最大值', function () {
  it('对于加 3 [2, 3, 5, 1, 3] 中能成为最大值的是：[true, true, true, false, true]', function () {
    const candies = [2, 3, 5, 1, 3],
      extraCandies = 3;
    const result = [true, true, true, false, true];

    expect(kidsWithCandies(candies, extraCandies)).to.be.deep.equal(result);
  });

  it('对于加 1 [4,2,1,1,2] 中能成为最大值的是：[true,false,false,false,false]', function () {
    const candies = [4, 2, 1, 1, 2],
      extraCandies = 1;
    const result = [true, false, false, false, false];

    expect(kidsWithCandies(candies, extraCandies)).to.be.deep.equal(result);
  });

  it('对于加 10 [12,1,12] 中能成为最大值的是：[true,false,true]', function () {
    const candies = [12, 1, 12],
      extraCandies = 10;
    const result = [true, false, true];

    expect(kidsWithCandies(candies, extraCandies)).to.be.deep.equal(result);
  });
});
