const expect = require('chai').expect;
const removeDuplicates = require('../../../src/stack/simple/1047-remove-all-adjacent-duplicates-in-string');

describe('移除相邻重复的字符', function () {
  it('abbaca 移除相邻重复字符为 ca', function () {
    const S = 'abbaca';
    const result = 'ca';
    expect(removeDuplicates(S)).to.be.equal(result);
  });
  it('abcd 移除相邻重复字符为 abcd', function () {
    const S = 'abcd';
    const result = 'abcd';
    expect(removeDuplicates(S)).to.be.equal(result);
  });
  it('aabbccdd 移除相邻重复字符为 空', function () {
    const S = 'aabbccdd';
    const result = '';
    expect(removeDuplicates(S)).to.be.equal(result);
  });
  it('aabaac 移除相邻重复字符为 bc', function () {
    const S = 'aabaac';
    const result = 'bc';
    expect(removeDuplicates(S)).to.be.equal(result);
  });
  it('ccbbddccaac 移除相邻重复字符为 c', function () {
    const S = 'ccbbddccaac';
    const result = 'c';
    expect(removeDuplicates(S)).to.be.equal(result);
  });
});
