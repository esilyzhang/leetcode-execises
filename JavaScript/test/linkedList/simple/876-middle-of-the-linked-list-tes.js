const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-roughly'))
const middleNode = require('../../../src/linkedList/simple/876-middle-of-the-linked-list')

describe('寻找单链表中的中间节点', function () {
  let ListNode
  before(function () {
    ListNode = function (val, next) {
      this.val = val === undefined ? 0 : val
      this.next = next === undefined ? null : next
    }
  })
  it('1 中间节点为 1', function () {
    const input = new ListNode(1)
    const result = new ListNode(1)
    expect(middleNode(input)).to.roughly.deep.equal(result)
  })
  it('1->2->3->4->5 中间节点为 3->4->5', function () {
    const input = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    const result = new ListNode(3, new ListNode(4, new ListNode(5)))
    expect(middleNode(input)).to.roughly.deep.equal(result)
  })
  it('1->2->3->4->5->6 中间节点为 4->5->6', function () {
    const input = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    )
    const result = new ListNode(4, new ListNode(5, new ListNode(6)))
    expect(middleNode(input)).to.roughly.deep.equal(result)
  })
})
