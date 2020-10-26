const expect = require('chai').expect;
const subtractProductAndSum = require('../src/simple/subtract-the-product-and-sum-of-digits-of-an-integer');

describe('整数各位之积与各位之和的差值', function () {
  it('对于 234 应该得到 15', function () {
    const n = 234;
    const result = 15;

    expect(subtractProductAndSum(n)).to.equal(result);
  });

  it('对于 4421 应该得到 21', function () {
    const n = 4421;
    const result = 21;

    expect(subtractProductAndSum(n)).to.equal(result);
  });
});
