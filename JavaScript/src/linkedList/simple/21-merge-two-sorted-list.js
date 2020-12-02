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
var mergeTwoLists = function (l1, l2) {
  let node1 = l1,
    node2 = l2,
    firstNode = null,
    node1Last
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  }
  // 遍历第一条链
  while (node1) {
    if (node2.next && node1.val > node2.val && node2.next.val) {
    }
  }
  // 3. 第二条链还存在元素
  if (node2) {
    node1Last.next = node2
  }
  return firstNode
}
//----------------------------------------------------------------
// 1. 如果第一条链为空，返回第二条链；如果第二条链为空，返回第一条链
// 2. 遍历第一条链，寻找第二条链中第一条链中每个节点的位置
// 3. 遍历完成，如果第二条链还存在未遍历的值，将第一条链连接第二条链
module.exports = mergeTwoLists
