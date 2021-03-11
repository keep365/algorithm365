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

  let head = null
  let pre = null
  let p = list

  while (p !== null && p.next !== null) {
    const next = p.next
    const cur = p

    cur.next = p.next.next
    next.next = cur

    if (head === null) head = next

    if (pre === null) {
      pre = next.next
    } else {
      pre.next = next
      pre = next.next
    }

    p = next.next.next
  }

  return head
}

export default swapPairs
