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

//     1      2    3    4
// pre start next end
// pre next start end
const swapPairs = function (list) {
  const pre = new ListNode()
  pre.next = list

  let tmp = pre

  while (tmp.next !== null && tmp.next.next !== null) {
    const start = tmp.next
    const next = start.next
    const end = next.next
    start.next = end
    next.next = start
    tmp.next = next
    tmp = start
  }

  return pre.next
}

export default swapPairs
