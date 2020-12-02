/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * @result Runtime: 80 ms, faster than 89.89% of JavaScript online submissions for Palindrome Linked List.
 * Memory Usage: 41.8 MB, less than 72.32% of JavaScript online submissions for Palindrome Linked List.
 */
var isPalindrome = function (head) {
  let count = 0,
    middleNode = head,
    curNode = head;
  if (!head) {
    return true;
  }
  // 找到中间节点，并计数
  while (head) {
    count++;
    if (count % 2 === 0) {
      middleNode = middleNode.next;
    }
    head = head.next;
  }
  // 判断后半部分节点的起点
  let reverseCount = parseInt(count / 2),
    temp = null,
    pre = null;
  if (count % 2 === 1) {
    middleNode = middleNode.next;
  }
  // 反转前半部分的链表
  while (reverseCount) {
    temp = curNode.next;
    curNode.next = pre;
    pre = curNode;
    curNode = temp;
    reverseCount--;
  }
  // 遍历中间链表，对比
  while (middleNode) {
    if (middleNode.val !== pre.val) {
      return false;
    }
    middleNode = middleNode.next;
    pre = pre.next;
  }
  return true;
};
//----------------------------------
// 1. 遍历链表，找到中间节点
// 2. 从头开始遍历链表，反转前半部分的链表
// 3. 遍历半部分链表，对比是否相同
module.exports = isPalindrome;
