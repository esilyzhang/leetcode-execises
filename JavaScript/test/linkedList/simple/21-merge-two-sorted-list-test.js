const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-roughly'))
const mergeTwoLists = require('../../../src/linkedList/simple/21-merge-two-sorted-list')

describe('合并两个排序链表并排序', function () {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
  it('1->2->4 和 1->3->4 合并为 1->1->2->3->4->4', function () {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(4)))
    const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    const result = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    )
    console.log('ppp', JSON.stringify(mergeTwoLists(l1, l2)))
    expect(mergeTwoLists(l1, l2)).to.roughly.deep.equal(result)
  })
  it('1->1->1 和 1->1->1 合并为 1->1->1->1->1->1', function () {
    const l1 = new ListNode(1, new ListNode(1, new ListNode(1)))
    const l2 = new ListNode(1, new ListNode(1, new ListNode(1)))
    const result = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))
      )
    )
    expect(mergeTwoLists(l1, l2)).to.roughly.deep.equal(result)
  })
  it('1->2->3 和 4->5->6 合并为 1->2->3->4->5->6', function () {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(3)))
    const l2 = new ListNode(4, new ListNode(5, new ListNode(6)))
    const result = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    )
    expect(mergeTwoLists(l1, l2)).to.roughly.deep.equal(result)
  })
  it('空l1 和 空l2 合并为 空', function () {
    const l1 = null
    const l2 = null
    expect(mergeTwoLists(l1, l2)).to.equal(null)
  })
  it('空l1 和 1 合并为 1', function () {
    const l1 = null
    const l2 = new ListNode(0)
    expect(mergeTwoLists(l1, l2)).to.equal(l2)
  })
  it('空l2 和 1 合并为 1', function () {
    const l2 = null
    const l1 = new ListNode(0)
    expect(mergeTwoLists(l1, l2)).to.equal(l1)
  })
})
