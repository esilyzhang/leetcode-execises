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
module.exports = addTwoNumbers;
