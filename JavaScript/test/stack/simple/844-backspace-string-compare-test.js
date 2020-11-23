const expect = require('chai').expect;
const backspaceCompare = require('../../../src/stack/simple/844-backspace-string-compare');
describe('字符串对比', function () {
  it('ab#c ad#c 相等', function () {
    const S = 'ab#c',
      T = 'ad#c';

    expect(backspaceCompare(S, T)).to.be.true;
  });

  it('ab## c#d# 相等', function () {
    const S = 'ab##',
      T = 'c#d#';

    expect(backspaceCompare(S, T)).to.be.true;
  });

  it('a##c #a#c 相等', function () {
    const S = 'a##c',
      T = '#a#c';
    expect(backspaceCompare(S, T)).to.be.true;
  });
  it('a#c b 相等', function () {
    const S = 'a#c',
      T = 'b';
    expect(backspaceCompare(S, T)).to.be.false;
  });
});
