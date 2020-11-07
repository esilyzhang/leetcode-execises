const expect = require('chai').expect;
const reverseList = require('../../../src/linkedList/simple/206-reverse-linked-list');

describe('反转链表', function () {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  const getLinkListVal = (node) => {
    const res = [];
    while (node) {
      res.push(node.val);
      node = node.next;
    }
    return res;
  };
  it('1->2->3->4->5->NULL 转换为 5->4->3->2->1->NULL', function () {
    const node5 = new ListNode(5);
    const node4 = new ListNode(4, node5);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);
    const result = [5, 4, 3, 2, 1];

    expect(getLinkListVal(reverseList(node1))).to.be.deep.equal(result);
  });
  it('1->NULL 转换为 1->NULL', function () {
    const node1 = new ListNode(1);
    const result = [1];

    expect(getLinkListVal(reverseList(node1))).to.be.deep.equal(result);
  });
  it('NULL 转换为 NULL', function () {
    const node1 = null;
    const result = [];

    expect(getLinkListVal(reverseList(node1))).to.be.deep.equal(result);
  });
});
