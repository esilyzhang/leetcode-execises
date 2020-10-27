const expect = require('chai').expect;
const maxDepth = require('../../src/simple/maximum-nesting-depth-of-the-parentheses');

describe('找到括号最深的层数', function () {
  it('(1+(2*3)+((8)/4))+1 的最深层数为 3', function () {
    const s = '(1+(2*3)+((8)/4))+1';
    const result = 3;

    expect(maxDepth(s)).to.be.equal(result);
  });

  it('(1)+((2))+(((3))) 的最深层数为 3', function () {
    const s = '(1)+((2))+(((3)))';
    const result = 3;

    expect(maxDepth(s)).to.be.equal(result);
  });

  it('1+(2*3)/(2-1) 的最深层数为 1', function () {
    const s = '1+(2*3)/(2-1)';
    const result = 1;

    expect(maxDepth(s)).to.be.equal(result);
  });

  it('1 的最深层数为 0', function () {
    const s = '1';
    const result = 0;

    expect(maxDepth(s)).to.be.equal(result);
  });
});
