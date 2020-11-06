var RecentCounter = function () {
  this.counter = [];
};

/**
 * @param {number} t
 * @return {number}
 * @result Runtime: 216 ms, faster than 95.71% of JavaScript online submissions for Number of Recent Calls.
 * Memory Usage: 49.2 MB, less than 5.38% of JavaScript online submissions for Number of Recent Calls.
 */
RecentCounter.prototype.ping = function (t) {
  let startTime = t - 3000,
    self = this;
  this.counter.push(t);

  function count() {
    let first = self.counter[0];
    if (first < startTime) {
      self.counter.shift();
      count();
    }
  }
  count();

  return this.counter.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

module.exports = RecentCounter;
