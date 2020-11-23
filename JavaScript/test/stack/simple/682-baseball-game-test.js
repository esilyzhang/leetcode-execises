const expect = require('chai').expect;
const calPoints = require('../../../src/stack/simple/682-baseball-game');

describe('棒球游戏', function () {
  it("5', '2', 'C', 'D', '+' 得到 30 分", function () {
    const ops = ['5', '2', 'C', 'D', '+'];
    const result = 30;

    expect(calPoints(ops)).to.equal(result);
  });

  it('"5","-2","4","C","D","9","+","+" 得到 27 分', function () {
    const ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+'];
    const result = 27;

    expect(calPoints(ops)).to.equal(result);
  });

  it('1 得到 1 分', function () {
    const ops = ['1'];
    const result = 1;

    expect(calPoints(ops)).to.equal(result);
  });
});
