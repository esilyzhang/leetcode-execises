const expect = require('chai').expect;
const balancedStringSplit = require('../../src/simple/split-a-string-in-balanced-strings');

describe('切分成最大数量的平衡字符串', function () {
  it('RLRRLLRLRL 能够最大切分成 4 个平衡字符串', function () {
    const s = 'RLRRLLRLRL';
    const result = 4;

    expect(balancedStringSplit(s)).to.be.equal(result);
  });

  it('RLLLLRRRLR 能够最大切分成 3 个平衡字符串', function () {
    const s = 'RLLLLRRRLR';
    const result = 3;

    expect(balancedStringSplit(s)).to.be.equal(result);
  });

  it('LLLLRRRR 能够最大切分成 1 个平衡字符串', function () {
    const s = 'LLLLRRRR';
    const result = 1;

    expect(balancedStringSplit(s)).to.be.equal(result);
  });

  it('RLRRRLLRLL 能够最大切分成 2 个平衡字符串', function () {
    const s = 'RLRRRLLRLL';
    const result = 2;

    expect(balancedStringSplit(s)).to.be.equal(result);
  });
});
