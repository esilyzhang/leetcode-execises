const expect = require('chai').expect;
const numberOfSteps = require('../src/simple/number-of-steps-to-reduce-a-number-to-zero');

describe('非负整数迭代为零所需步数', function () {
  it('14 需要 6 步迭代', function () {
    const num = 14;
    const result = 6;

    expect(numberOfSteps(num)).to.equal(result);
  });

  it('8 需要 4 步迭代', function () {
    const num = 8;
    const result = 4;

    expect(numberOfSteps(num)).to.equal(result);
  });

  it('123 需要 12 步迭代', function () {
    const num = 123;
    const result = 12;

    expect(numberOfSteps(num)).to.equal(result);
  });
});
