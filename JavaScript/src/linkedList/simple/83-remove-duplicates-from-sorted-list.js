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
 * @result Runtime: 76 ms, faster than 99.16% of JavaScript online submissions for Remove Duplicates from Sorted List.
 * Memory Usage: 40.2 MB, less than 28.77% of JavaScript online submissions for Remove Duplicates from Sorted List.
 */
var deleteDuplicates = function (head) {
  let node = head;
  while (node) {
    let nextNode;
    while (node.next) {
      if (node.next.val !== node.val) {
        nextNode = node.next;
        break;
      }
      node.next = node.next.next;
    }
    node = nextNode;
  }
  return head;
};
//----------------------------------------------------------------
// 解题思路
// 1 从当前节点（0）开始
// 2 对比之后的节点值
// 3 如果相同，继续后对比2
// 4 如果不同，节点置为不同的节点，继续 1
module.exports = deleteDuplicates;
