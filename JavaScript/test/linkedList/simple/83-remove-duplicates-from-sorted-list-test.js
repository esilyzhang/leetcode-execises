const expect = require('chai').expect;
const deleteDuplicates = require('../../../src/linkedList/simple/83-remove-duplicates-from-sorted-list');

describe('删除排序列表的重复元素', function () {
  it('1->1->2 删除重复元素后为 1->2', function () {
    const node1 = { val: 1, next: null };
    const node2 = { val: 1, next: null };
    const node3 = { val: 2, next: null };
    const node4 = { val: 1, next: null };
    const node5 = { val: 2, next: null };
    node1.next = node2;
    node2.next = node3;
    node4.next = node5;

    expect(deleteDuplicates(node1)).to.be.deep.equal(node4);
  });
  it('1->1->2 删除重复元素后为 1->2', function () {
    const node1 = { val: 1, next: null };
    const node2 = { val: 1, next: null };
    const node3 = { val: 2, next: null };
    const node4 = { val: 3, next: null };
    const node5 = { val: 3, next: null };
    const node6 = { val: 1, next: null };
    const node7 = { val: 2, next: null };
    const node8 = { val: 3, next: null };
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node6.next = node7;
    node7.next = node8;

    expect(deleteDuplicates(node1)).to.be.deep.equal(node6);
  });
  it('1->1->2 删除重复元素后为 1->2', function () {
    const node1 = { val: 1, next: null };
    const node2 = { val: 1, next: null };
    const node3 = { val: 1, next: null };
    const node4 = { val: 1, next: null };
    node1.next = node2;
    node2.next = node3;

    expect(deleteDuplicates(node1)).to.be.deep.equal(node4);
  });
});
