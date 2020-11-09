/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * @result Runtime: 236 ms, faster than 5.22% of JavaScript online submissions for Linked List Cycle.
 * Memory Usage: 40.8 MB, less than 9.77% of JavaScript online submissions for Linked List Cycle.
 */
var hasCycle = function (head) {
  const nodes = [];
  while (head) {
    let res = nodes.some((item) => {
      return item === head;
    });
    if (res) {
      return true;
    }
    nodes.push(head);
    head = head.next;
  }
  return false;
};
//----------------------------------------------------------------
//
module.exports = hasCycle;
