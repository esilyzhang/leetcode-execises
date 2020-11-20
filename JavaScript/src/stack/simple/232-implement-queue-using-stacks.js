/**
 * Initialize your data structure here.
 * @result Runtime: 76 ms, faster than 67.65% of JavaScript online submissions for Implement Queue using Stacks.
 * Memory Usage: 38.6 MB, less than 11.65% of JavaScript online submissions for Implement Queue using Stacks.
 */
var MyQueue = function () {
  function Stack() {
    this.stack = [];
  }
  Stack.prototype.push = function (x) {
    this.stack.push(x);
  };
  Stack.prototype.pop = function () {
    return this.stack.pop();
  };
  Stack.prototype.peek = function () {
    return this.stack[this.stack.length - 1];
  };
  Stack.prototype.size = function () {
    return this.stack.length;
  };
  Stack.prototype.empty = function () {
    return !Boolean(this.stack.length);
  };
  this.translate = function (source, target, times) {
    for (let i = 0; i < times; i++) {
      target.push(source.pop());
    }
  };
  this.stack1 = new Stack();
  this.stack2 = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.translate(this.stack1, this.stack2, this.stack1.size() - 1);
  let curVal = this.stack1.pop();
  this.translate(this.stack2, this.stack1, this.stack2.size());
  return curVal;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.translate(this.stack1, this.stack2, this.stack1.size());
  let curVal = this.stack2.peek();
  this.translate(this.stack2, this.stack1, this.stack2.size());
  return curVal;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.empty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
module.exports = MyQueue;
