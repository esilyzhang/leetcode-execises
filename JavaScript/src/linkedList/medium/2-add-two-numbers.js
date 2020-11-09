/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @description 学习链表数据结构之前所做的
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let carry = 0,
    firstNode,
    nextNode,
    curNode;
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  function add(curNode1, curNode2) {
    let num, sum;
    sum = carry + (curNode1 ? curNode1.val : 0) + (curNode2 ? curNode2.val : 0);
    num = sum % 10;
    carry = parseInt(sum / 10);

    if (!firstNode) {
      curNode = new ListNode(num, null);
      firstNode = curNode;
    } else {
      curNode.val = num;
    }
    if ((curNode1 && curNode1.next) || (curNode2 && curNode2.next)) {
      nextNode = new ListNode(0, null);
      curNode.next = nextNode;
      curNode = nextNode;
      add(
        (curNode1 && curNode1.next) || null,
        (curNode2 && curNode2.next) || null
      );
    } else if (carry) {
      curNode.next = new ListNode(carry, null);
      return firstNode;
    } else {
      return firstNode;
    }
  }
  add(l1, l2);
  return firstNode;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @result Runtime: 144 ms, faster than 33.29% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 46.3 MB, less than 6.99% of JavaScript online submissions for Add Two Numbers.
 */
function addTwoNumbers(l1, l2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  let head,
    carry = 0,
    curNode = null;
  while (l1) {
    let addend1 = l1.val;
    let addend2 = (l2 && l2.val) || 0;
    let sum = addend1 + addend2 + carry,
      unit = 0;
    if (sum > 9) {
      carry = parseInt(sum / 10);
      unit = sum % 10;
    } else {
      carry = 0;
      unit = sum;
    }
    if (curNode) {
      curNode.next = new ListNode(unit, null);
      curNode = curNode.next;
    } else {
      curNode = new ListNode(unit, null);
      head = curNode;
    }
    if (!l1.next) {
      if (carry) {
        curNode.next = new ListNode(carry, null);
      }
    }
    if (l1.next) {
      l1 = l1.next;
      l2 = (l2 && l2.next) || null;
    } else if (l2 && l2.next) {
      l1 = l2.next;
      l2 = null;
    } else {
      l1 = null;
    }
  }
  return head;
}
module.exports = addTwoNumbers;
