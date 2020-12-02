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
 * @result Runtime: 80 ms, faster than 38.17% of JavaScript online submissions for Middle of the Linked List.
Memory Usage: 38.5 MB, less than 40.46% of JavaScript online submissions for Middle of the Linked List.
 */
var middleNode = function (head) {
  let middleNode = head,
    count = 1
  while (head) {
    if (count % 2 === 0) {
      middleNode = middleNode.next
    }
    count++
    head = head.next
  }
  return middleNode
}
module.exports = middleNode
