const expect = require('chai').expect;
const removeOuterParentheses = require('../../../src/stack/simple/1021-remove-outermost-parentthese');
describe('移除最外层的小括号', function () {
  it('(()())(()) 移除最外层括号为 ()()()', function () {
    const s = '(()())(())';
    const result = '()()()';
    expect(removeOuterParentheses(s)).to.be.equal(result);
  });
  it('(()())(())(()(())) 移除最外层括号为 ()()()()(())', function () {
    const s = '(()())(())(()(()))';
    const result = '()()()()(())';
    expect(removeOuterParentheses(s)).to.be.equal(result);
  });
  it('()() 移除最外层括号为 ""', function () {
    const s = '()()';
    const result = '';
    expect(removeOuterParentheses(s)).to.be.equal(result);
  });
});
