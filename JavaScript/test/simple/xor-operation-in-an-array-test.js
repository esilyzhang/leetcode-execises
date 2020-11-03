const expect = require('chai').expect;
const xorOperation = require('../../src/simple/xor-operation-in-an-array');

describe('数组各元素的 XOR 操作', function () {
  it('长度为 5 开始位为 0 的数组的 XOR 结果为 8', function () {
    const n = 5,
      start = 0;
    const result = 8;

    expect(xorOperation(n, start)).to.be.equal(result);
  });

  it('长度为 4 开始位为 3 的数组的 XOR 结果为 8', function () {
    const n = 4,
      start = 3;
    const result = 8;

    expect(xorOperation(n, start)).to.be.equal(result);
  });

  it('长度为 1 开始位为 7 的数组的 XOR 结果为 7', function () {
    const n = 1,
      start = 7;
    const result = 7;

    expect(xorOperation(n, start)).to.be.equal(result);
  });

  it('长度为 10 开始位为 5 的数组的 XOR 结果为 2', function () {
    const n = 10,
      start = 5;
    const result = 2;

    expect(xorOperation(n, start)).to.be.equal(result);
  });
});
