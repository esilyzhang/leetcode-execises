/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @result Runtime: 84 ms, faster than 57.21% of JavaScript online submissions for Reverse Linked List.
 * Memory Usage: 40.9 MB, less than 42.63% of JavaScript online submissions for Reverse Linked List.
 */
var reverseList = function (head) {
  let newHead;
  function reverseNode(node) {
    if (node && node.next && node.next.next) {
      reverseNode(node.next);
    }
    if (!newHead) newHead = node && node.next ? node.next : node || null;
    if (node && node.next) {
      node.next.next = node;
      node.next = null;
    }
  }
  reverseNode(head);
  return newHead;
};
module.exports = reverseList;
