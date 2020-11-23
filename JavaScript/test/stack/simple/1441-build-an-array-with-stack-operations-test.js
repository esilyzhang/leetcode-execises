const expect = require('chai').expect;
const buildArray = require('../../../src/stack/simple/1441-build-an-array-with-stack-operations');

describe('使用栈操作实现数组操作', function () {
  it('Push->Push->Pop->Push 构建 1,3', function () {
    const target = [1, 3],
      n = 3;
    const result = ['Push', 'Push', 'Pop', 'Push'];

    expect(buildArray(target, n)).to.be.deep.equal(result);
  });
  it('Push->Push->Push 构建 1,2,3', function () {
    const target = [1, 2, 3],
      n = 3;
    const result = ['Push', 'Push', 'Push'];

    expect(buildArray(target, n)).to.be.deep.equal(result);
  });
  it('Push->Push 构建 1,2', function () {
    const target = [1, 2],
      n = 4;
    const result = ['Push', 'Push'];

    expect(buildArray(target, n)).to.be.deep.equal(result);
  });
  it('Push->Pop->Push->Push->Push 构建 2,3,4', function () {
    const target = [2, 3, 4],
      n = 4;
    const result = ['Push', 'Pop', 'Push', 'Push', 'Push'];

    expect(buildArray(target, n)).to.be.deep.equal(result);
  });
});
