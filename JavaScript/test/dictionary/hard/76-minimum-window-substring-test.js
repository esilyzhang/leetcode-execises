const expect = require('chai').expect;
const minWindow = require('../../../src/dictionary/hard/76-minimum-window-substring');

describe('寻找包含字符串中所有字符的最短子字符串', function () {
  it('ADOBECODEBANC 中包括 ABC 所有字符的字符串是 BANC', function () {
    const s = 'ADOBECODEBANC',
      t = 'ABC';
    const result = 'BANC';

    expect(minWindow(s, t)).to.be.equal(result);
  });

  it('a 中包括 a 所有字符的字符串是 a', function () {
    const s = 'a',
      t = 'a';
    const result = 'a';

    expect(minWindow(s, t)).to.be.equal(result);
  });

  it('ADOBECDYEBANC 中包括 ECD 所有字符的字符串是 ECD', function () {
    const s = 'ADOBECDYEBANC',
      t = 'ECD';
    const result = 'ECD';

    expect(minWindow(s, t)).to.be.equal(result);
  });

  it('ADOBECODEBANC 中包括 EFG 所有字符的字符串是空', function () {
    const s = 'ADOBECODEBANC',
      t = 'EFG';
    const result = '';

    expect(minWindow(s, t)).to.be.equal(result);
  });

  it('ab 中包括 b 所有字符的字符串是 b', function () {
    const s = 'ab',
      t = 'b';
    const result = 'b';

    expect(minWindow(s, t)).to.be.equal(result);
  });

  it('abcd 中包括 bd 所有字符的字符串是 bcd', function () {
    const s = 'abcd',
      t = 'bd';
    const result = 'bcd';

    expect(minWindow(s, t)).to.be.equal(result);
  });

  it('aa 中包括 aa 所有字符的字符串是 aa', function () {
    const s = 'aa',
      t = 'aa';
    const result = 'aa';

    expect(minWindow(s, t)).to.be.equal(result);
  });
});
