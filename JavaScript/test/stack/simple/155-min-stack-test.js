const expect = require('chai').expect;
const MinStack = require('../../../src/stack/simple/155-min-stack');

describe('能够找到最小值的栈', function () {
  let minStack = null;
  beforeEach(function () {
    minStack = new MinStack();
  });
  it('push -2,0,-3 top 元素为 -3', function () {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.top()).to.be.equal(-3);
  });

  it('push -4,0,-3 getMin 元素为 -4', function () {
    minStack.push(-4);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).to.be.equal(-4);
  });
  it('push -4,-5,-3 getMin 元素为 -5', function () {
    minStack.push(-4);
    minStack.push(-5);
    minStack.push(-3);
    expect(minStack.getMin()).to.be.equal(-5);
  });
  it('push -2,0,-3 getMin 元素为 -3', function () {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).to.be.equal(-3);
  });
  it('push -2,0,-3,-4 pop 之后 top 元素为 -3', function () {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.push(-4);
    minStack.pop();
    expect(minStack.top()).to.be.equal(-3);
  });
  it('push -2,-3,0,-4 pop 之后 getMin 元素为 -3', function () {
    minStack.push(-2);
    minStack.push(-3);
    minStack.push(0);
    minStack.push(-4);
    minStack.pop();
    expect(minStack.getMin()).to.be.equal(-3);
  });
  it('push -2,-5,-3,-4 pop 之后 getMin 元素为 -5', function () {
    minStack.push(-2);
    minStack.push(-5);
    minStack.push(-3);
    minStack.push(-4);
    minStack.pop();
    expect(minStack.getMin()).to.be.equal(-5);
  });
  it('push -2,-5,-3,-6,-2,-7 getMin 元素为 -7', function () {
    minStack.push(-2);
    minStack.push(-5);
    minStack.push(-3);
    minStack.push(-6);
    minStack.push(-2);
    minStack.push(-7);
    expect(minStack.getMin()).to.be.equal(-7);
  });
  it('push -2,-5,-3,-6,-2,-7 pop之后 getMin 元素为 -6', function () {
    minStack.push(-2);
    minStack.push(-5);
    minStack.push(-3);
    minStack.push(-6);
    minStack.push(-2);
    minStack.push(-7);
    minStack.pop();
    expect(minStack.getMin()).to.be.equal(-6);
  });
  it('push -2,-5,-3,-6,-2,-7 pop-->pop 之后 getMin 元素为 -6', function () {
    minStack.push(-2);
    minStack.push(-5);
    minStack.push(-3);
    minStack.push(-6);
    minStack.push(-2);
    minStack.push(-7);
    minStack.pop();
    minStack.pop();
    expect(minStack.getMin()).to.be.equal(-6);
  });
  it('push -2,-5,-3,-6,-2,-7 pop-->pop-->pop 之后 getMin 元素为 -5', function () {
    minStack.push(-2);
    minStack.push(-5);
    minStack.push(-3);
    minStack.push(-6);
    minStack.push(-2);
    minStack.push(-7);
    minStack.pop();
    minStack.pop();
    minStack.pop();
    expect(minStack.getMin()).to.be.equal(-5);
  });
  afterEach(function () {
    minStack = null;
  });
});
