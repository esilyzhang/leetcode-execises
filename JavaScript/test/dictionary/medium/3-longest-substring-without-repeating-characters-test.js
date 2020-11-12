const expect = require('chai').expect;
const lengthOfLongestSubstring = require('../../../src/dictionary/medium/3-longest-substring-without-repeating-characters');

describe('寻找最长的不含重复字符的子字符串', function () {
  it('abcabcbb 最长的不重复子字符串的长度为 3', function () {
    const s = 'abcabcbb';
    const result = 3;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });

  it('bbbbb 最长的不重复子字符串的长度为 1', function () {
    const s = 'bbbbb';
    const result = 1;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });

  it('pwwkew 最长的不重复子字符串的长度为 3', function () {
    const s = 'pwwkew';
    const result = 3;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });
  it('abcdiopklmnhygt 最长的不重复子字符串的长度为 15', function () {
    const s = 'abcdiopklmnhygt';
    const result = 15;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });
  it('abcdiobpklmnhygt 最长的不重复子字符串的长度为 14', function () {
    const s = 'abcdiobpklmnhygt';
    const result = 14;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });
  it('cdd 最长的不重复子字符串的长度为 2', function () {
    const s = 'cdd';
    const result = 2;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });
  it('aab 最长的不重复子字符串的长度为 2', function () {
    const s = 'aab';
    const result = 2;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });
  it('dvdf 最长的不重复子字符串的长度为 3', function () {
    const s = 'dvdf';
    const result = 3;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });
  it('ohomm 最长的不重复子字符串的长度为 3', function () {
    const s = 'ohomm';
    const result = 3;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });
  it('空字符串最长的不重复子字符串的长度为 0', function () {
    const s = '';
    const result = 0;

    expect(lengthOfLongestSubstring(s)).to.be.equal(result);
  });
});
