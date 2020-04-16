/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
l1 a->b->c
l2 d->e->f

l2 的节点和 l1 的节点比较
把 l2 插入到 l1
 */
const mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  // 在哪个节点之前插入，不存在则插入末尾
  function find(val) {
    let p1 = l1
    while (p1) {
      if (val <= p1.val) return p1
      p1 = p1.next
    }
  }

  // 不存在，则在第一项之前插入，否则在返回的之后插入
  function findNode(val) {
    let p = l1
    if (p.val === val) return
    while (p.next && p.next.val !== val) {
      p = p.next
    }
    return p
  }

  let p2 = l2

  while (p2) {
    const tmp2 = p2.next
    const n = find(p2.val)
    if (n) {
      const q = findNode(n.val)
      if (q) {
        const tmp = q.next
        q.next = p2
        p2.next = tmp
        p2 = tmp2
      } else {
        p2.next = l1
        l1 = p2
        p2 = tmp2
      }
    } else {
      let end = l1
      while (end.next) {
        end = end.next
      }
      p2.next = null
      end.next = p2
      p2 = tmp2
    }
  }

  return l1
}

export default mergeTwoLists
