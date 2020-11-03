/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 * @result Runtime: 84 ms, faster than 20.19% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 * Memory Usage: 38.6 MB, less than 50.75% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 */
var getDecimalValue = function (head) {
  let num = '';
  function getNodeVal(node) {
    num += node.val;
    if (node.next) {
      getNodeVal(node.next);
    }
  }
  getNodeVal(head);
  return parseInt(num, 2);
};
module.exports = getDecimalValue;
