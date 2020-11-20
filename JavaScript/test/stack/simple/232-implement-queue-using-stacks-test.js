const expect = require('chai').expect;
const MyQueue = require('../../../src/stack/simple/232-implement-queue-using-stacks');

describe('使用栈实现队列', function () {
  let myQueue = null;
  beforeEach(function () {
    myQueue = new MyQueue();
  });
  it('push(1) peek() 为 1', function () {
    myQueue.push(1);
    expect(myQueue.peek()).to.be.equal(1);
  });
  it('push(1)->push(2) peek() 为 1', function () {
    myQueue.push(1);
    myQueue.push(2);
    expect(myQueue.peek()).to.be.equal(1);
  });
  it('push(1)->push(2)->push(3)->pop() 返回 1', function () {
    myQueue.push(1);
    myQueue.push(2);
    myQueue.push(3);
    let curVal = myQueue.pop();
    expect(curVal).to.be.equal(1);
  });
  it('什么也不做, empty() 为 true', function () {
    expect(myQueue.empty()).to.be.true;
  });
  it('push(1) empty() 为 false', function () {
    myQueue.push(1);
    expect(myQueue.empty()).to.be.false;
  });
  afterEach(function () {
    myQueue = null;
  });
});
