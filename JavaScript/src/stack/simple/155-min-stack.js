/**
 * initialize your data structure here.
 * @result Runtime: 120 ms, faster than 74.55% of JavaScript online submissions for Min Stack.
 * Memory Usage: 45.2 MB, less than 76.28% of JavaScript online submissions for Min Stack.
 */
var MinStack = function () {
  this.stack = [];
  this.minTrack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (!this.minTrack.length || this.minTrack[this.minTrack.length - 1] >= x) {
    this.minTrack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (
    this.minTrack[this.minTrack.length - 1] ===
    this.stack[this.stack.length - 1]
  ) {
    this.minTrack.pop();
  }
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minTrack[this.minTrack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
module.exports = MinStack;
