/**
 * Initialize your data structure here.
 * @result Runtime: 68 ms, faster than 97.42% of JavaScript online submissions for Implement Stack using Queues.
 * Memory Usage: 38.3 MB, less than 71.96% of JavaScript online submissions for Implement Stack using Queues.
 */
var MyStack = function () {
  function Quene() {
    this.quene = [];
  }
  Quene.prototype.push = function (x) {
    this.quene.push(x);
  };
  Quene.prototype.pop = function () {
    return this.quene.shift();
  };
  Quene.prototype.size = function () {
    return this.quene.length;
  };
  Quene.prototype.empty = function () {
    return !Boolean(this.quene.length);
  };
  this.quene1 = new Quene();
  this.quene2 = new Quene();
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  const s1 = this.quene1.size();
  let q1, q2;

  if (s1) {
    q1 = this.quene1;
    q2 = this.quene2;
  } else {
    q1 = this.quene2;
    q2 = this.quene1;
  }
  q1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const s1 = this.quene1.size();
  let q1, q2;

  if (s1) {
    q1 = this.quene1;
    q2 = this.quene2;
  } else {
    q1 = this.quene2;
    q2 = this.quene1;
  }
  let times = q1.size() - 1;
  for (let i = 0; i < times; i++) {
    q2.push(q1.pop());
  }
  return q1.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  const s1 = this.quene1.size();
  let q1, q2, cur;

  if (s1) {
    q1 = this.quene1;
    q2 = this.quene2;
  } else {
    q1 = this.quene2;
    q2 = this.quene1;
  }
  let times = q1.size();

  for (let i = 0; i < times; i++) {
    cur = q1.pop();
    q2.push(cur);
  }
  return cur;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.quene1.empty() && this.quene2.empty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

module.exports = MyStack;
