/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * @result Runtime: 88 ms, faster than 56.27% of JavaScript online submissions for Delete Node in a Linked List.
 * Memory Usage: 40.2 MB, less than 38.45% of JavaScript online submissions for Delete Node in a Linked List.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
module.exports = deleteNode;
