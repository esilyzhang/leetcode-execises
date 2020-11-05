const expect = require('chai').expect;
const isValid = require('../../../src/stack/simple/20-valid-parentheses');

describe('括号是否闭合', function () {
  it('() 是闭合的', function () {
    const s = '()';
    const result = true;

    expect(isValid(s)).to.be.equal(result);
  });
  it('()[]{} 是闭合的', function () {
    const s = '()[]{}';
    const result = true;

    expect(isValid(s)).to.be.equal(result);
  });
  it('(] 没有闭合', function () {
    const s = '(]';
    const result = false;

    expect(isValid(s)).to.be.equal(result);
  });
  it('([)] 没有闭合', function () {
    const s = '([)]';
    const result = false;

    expect(isValid(s)).to.be.equal(result);
  });
  it('{[]} 是闭合的', function () {
    const s = '{[]}';
    const result = true;

    expect(isValid(s)).to.be.equal(result);
  });
});
