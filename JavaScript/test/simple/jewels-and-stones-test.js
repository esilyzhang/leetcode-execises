const expect = require('chai').expect;
const numJewelsInStones = require('../../src/simple/jewels-and-stones');

describe('统计子字符串的数量', function () {
  it('aAAbbbb 中包含一个 aA', function () {
    const J = 'aA',
      S = 'aAAbbbb';

    expect(numJewelsInStones(J, S)).to.equal(3);
  });

  it('ZZ 中没有包含 z', function () {
    const J = 'z',
      S = 'ZZ';

    expect(numJewelsInStones(J, S)).to.equal(0);
  });
});
