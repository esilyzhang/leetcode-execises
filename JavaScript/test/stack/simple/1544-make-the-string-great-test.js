const expect = require('chai').expect;
const makeGood = require('../../../src/stack/simple/1544-make-the-string-great');

describe('字符串优化', function () {
  it('leEeetcode 优化后为 leetcode', function () {
    const s = 'leEeetcode';
    const result = 'leetcode';
    expect(makeGood(s)).to.be.equal(result);
  });

  it('abBAcC 优化后为 空', function () {
    const s = 'abBAcC';
    const result = '';
    expect(makeGood(s)).to.be.equal(result);
  });

  it('s 优化后为 s', function () {
    const s = 's';
    const result = 's';
    expect(makeGood(s)).to.be.equal(result);
  });

  it('Pp 优化后为 Pp', function () {
    const s = 'Pp';
    const result = '';
    expect(makeGood(s)).to.be.equal(result);
  });

  it('"kkdsFuqUfSDKK" 优化后为 "kkdsFuqUfSDKK"', function () {
    const s = '"kkdsFuqUfSDKK"';
    const result = '"kkdsFuqUfSDKK"';
    expect(makeGood(s)).to.be.equal(result);
  });
});
