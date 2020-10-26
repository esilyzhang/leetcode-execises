const expect = require('chai').expect;
const restoreString = require('../src/simple/shuffle-string');

describe('根据规则对字符串重新排序', function () {
  it('codeleet 根据规则 [4,5,6,7,0,2,1,3] 应该得到 leetcode', function () {
    const s = 'codeleet',
      indices = [4, 5, 6, 7, 0, 2, 1, 3],
      result = 'leetcode';

    expect(restoreString(s, indices)).to.equal(result);
  });

  it('abc 根据规则 [0,1,2] 应该得到 abc', function () {
    const s = 'abc',
      indices = [0, 1, 2],
      result = 'abc';

    expect(restoreString(s, indices)).to.equal(result);
  });

  it('aiohn 根据规则 [3,1,4,2,0] 应该得到 nihao', function () {
    const s = 'aiohn',
      indices = [3, 1, 4, 2, 0],
      result = 'nihao';

    expect(restoreString(s, indices)).to.equal(result);
  });

  it('aaiougrt 根据规则 [4,0,2,6,7,3,1,5] 应该得到 arigatou', function () {
    const s = 'aaiougrt',
      indices = [4, 0, 2, 6, 7, 3, 1, 5],
      result = 'arigatou';
    expect(restoreString(s, indices)).to.equal(result);
  });

  it('art 根据规则 [1,0,2] 应该得到 rat', function () {
    const s = 'art',
      indices = [1, 0, 2],
      result = 'rat';

    expect(restoreString(s, indices)).to.equal(result);
  });
});
