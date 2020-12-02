const expect = require('chai').expect;
const isPalindrome = require('../../../src/linkedList/simple/234-palindrome-linked-list');
describe('单链表是否为对称链表', function () {
  let ListNode;
  before(function () {
    ListNode = function (val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    };
  });
  it('1 不是对称链表', function () {
    const head = new ListNode(1);
    expect(isPalindrome(head)).to.be.true;
  });
  it('1->2 不是对称链表', function () {
    const head = new ListNode(1, new ListNode(2));
    expect(isPalindrome(head)).to.be.false;
  });
  it('1->2->1 是对称链表', function () {
    const head = new ListNode(1, new ListNode(2, new ListNode(1)));
    expect(isPalindrome(head)).to.be.true;
  });
  it('1->0->0 不是对称链表', function () {
    const head = new ListNode(1, new ListNode(0, new ListNode(0)));
    expect(isPalindrome(head)).to.be.false;
  });
  it('1->2->2->1 是对称链表', function () {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(2, new ListNode(1)))
    );
    expect(isPalindrome(head)).to.be.true;
  });
  it('1->2->2->2 不是对称链表', function () {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(2, new ListNode(2)))
    );
    expect(isPalindrome(head)).to.be.false;
  });
  it('1->2->3->3->2->1 是对称链表', function () {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(3, new ListNode(2, new ListNode(1))))
      )
    );
    expect(isPalindrome(head)).to.be.true;
  });
  it('1->2->3->3->2->3 不是对称链表', function () {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(3, new ListNode(2, new ListNode(3))))
      )
    );
    expect(isPalindrome(head)).to.be.false;
  });
});
