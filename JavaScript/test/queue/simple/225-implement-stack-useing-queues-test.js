const expect = require('chai').expect;
const MyStack = require('../../../src/queue/simple/225-implement-stack-useing-queues');
let myStack;
beforeEach(function () {
  myStack = new MyStack();
});
describe('通过队列结构实现栈', function () {
  it('入栈 1,2 top()为 2', function () {
    myStack.push(1);
    myStack.push(2);
    expect(myStack.top()).to.be.equal(2);
  });
  it('入栈 1,2 pop()为 2，大小为 1', function () {
    myStack.push(1);
    myStack.push(2);
    expect(myStack.pop()).to.be.equal(2);
    expect(myStack.empty()).to.be.false;
  });
  it('入栈 1 empty()为 false', function () {
    myStack.push(1);
    expect(myStack.empty()).to.be.false;
  });
  it('未入栈  empty()为 true', function () {
    expect(myStack.empty()).to.be.true;
  });
  afterEach(function () {
    myStack = null;
  });
});
