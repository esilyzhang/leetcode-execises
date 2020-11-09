const expect = require('chai').expect;
const hasCycle = require('../../../src/linkedList/simple/141-linked-list-cycle');

describe('判断链表中是否有环', function () {
  it('3->2->0->-4 中 -4->2 含有环', function () {
    const node1 = { val: 3, next: null };
    const node2 = { val: 2, next: null };
    const node3 = { val: 0, next: null };
    const node4 = { val: -4, next: null };
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;
    expect(hasCycle(node1)).to.be.true;
  });
  it('1->2 中 2->1 含有环', function () {
    const node1 = { val: 1, next: null };
    const node2 = { val: 2, next: null };
    node1.next = node2;
    node2.next = node1;
    expect(hasCycle(node1)).to.be.true;
  });
  it('1 不含有环', function () {
    const node1 = { val: 1, next: null };
    expect(hasCycle(node1)).to.be.false;
  });
});
