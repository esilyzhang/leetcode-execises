const expect = require('chai').expect;
const RecentCounter = require('../../../src/queue/simple/933-number-of-recent-calls');

describe('计算最近调用的次数', function () {
  let recentCounters;

  describe('ping 1,100,3001,3002', function () {
    before(function () {
      recentCounters = new RecentCounter();
    });
    it('1 3秒内的有 1 次', function () {
      expect(recentCounters.ping(1)).to.be.equal(1);
    });
    it('100 3秒内的有 2 次', function () {
      expect(recentCounters.ping(100)).to.be.equal(2);
    });
    it('3001 3秒内的有 3 次', function () {
      expect(recentCounters.ping(3001)).to.be.equal(3);
    });
    it('3002 3秒内的有 3 次', function () {
      expect(recentCounters.ping(3002)).to.be.equal(3);
    });

    after(function () {
      recentCounters = null;
    });
  });
  describe('ping 642,1849,4921,5936,5957', function () {
    before(function () {
      recentCounters = new RecentCounter();
    });
    it('642 3秒内的有 1 次', function () {
      expect(recentCounters.ping(642)).to.be.equal(1);
    });
    it('1849 3秒内的有 2 次', function () {
      expect(recentCounters.ping(1849)).to.be.equal(2);
    });
    it('4921 3秒内的有 1 次', function () {
      expect(recentCounters.ping(4921)).to.be.equal(1);
    });
    it('5936 3秒内的有 2 次', function () {
      expect(recentCounters.ping(5936)).to.be.equal(2);
    });
    it('5957 3秒内的有 3 次', function () {
      expect(recentCounters.ping(5957)).to.be.equal(3);
    });
    after(function () {
      recentCounters = null;
    });
  });
});
