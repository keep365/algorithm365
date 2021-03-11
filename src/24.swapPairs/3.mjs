/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (list) {
  if (list === null || list.next === null) return list
  const next = list.next
  list.next = swapPairs(next.next)
  next.next = list
  return next
}

export default swapPairs
