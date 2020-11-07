const expect = require('chai').expect;
const deleteNode = require('../../../src/linkedList/simple/237-delete-node-in-a-linked-list');

describe('在链表中删除节点', function () {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  const genLinkedList = (array, nodeVal) => {
    let curNode, nextNode, node, head;
    array.forEach((val, index) => {
      if (!curNode) {
        curNode = new ListNode(val);
        head = curNode;
      }
      curNode.val = val;
      if (val === nodeVal) {
        node = curNode;
      }
      if (index !== array.length - 1) {
        nextNode = new ListNode();
        curNode.next = nextNode;
        curNode = nextNode;
      }
    });
    return {
      head,
      node,
    };
  };
  const getLinkListVal = (node) => {
    const res = [];
    while (node) {
      res.push(node.val);
      node = node.next;
    }
    return res;
  };
  it('4, 5, 1, 9 链表中删除 5 为 4, 1, 9', function () {
    const linkedList = genLinkedList([4, 5, 1, 9], 5);
    deleteNode(linkedList.node);
    const result = [4, 1, 9];
    expect(getLinkListVal(linkedList.head)).to.be.deep.equal(result);
  });
  it('4, 5, 1, 9 链表中删除 1 为 4, 5, 9', function () {
    const linkedList = genLinkedList([4, 5, 1, 9], 1);
    deleteNode(linkedList.node);
    const result = [4, 5, 9];
    expect(getLinkListVal(linkedList.head)).to.be.deep.equal(result);
  });
  it('1, 2, 3, 4 链表中删除 3 为 1, 2, 4', function () {
    const linkedList = genLinkedList([1, 2, 3, 4], 3);
    deleteNode(linkedList.node);
    const result = [1, 2, 4];
    expect(getLinkListVal(linkedList.head)).to.be.deep.equal(result);
  });
  it('0, 1 链表中删除 0 为 1', function () {
    const linkedList = genLinkedList([0, 1], 0);
    deleteNode(linkedList.node);
    const result = [1];
    expect(getLinkListVal(linkedList.head)).to.be.deep.equal(result);
  });
  it('-3, 5, -99 链表中删除 -3 为 5,-99', function () {
    const linkedList = genLinkedList([-3, 5, -99], -3);
    deleteNode(linkedList.node);
    const result = [5, -99];
    expect(getLinkListVal(linkedList.head)).to.be.deep.equal(result);
  });
});
