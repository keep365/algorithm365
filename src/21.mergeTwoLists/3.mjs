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

将 l1 l2 较小的节点插入 prev 的后面，对应的指针往后移动
直到 l1 l2 有一个是 null，把另外不是 null 的接在 prev 后面
 */
const mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  let head = {
    next: null,
  }

  let prev = head

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }

  prev.next = !l1 ? l2 : l1

  return head.next
}

export default mergeTwoLists
