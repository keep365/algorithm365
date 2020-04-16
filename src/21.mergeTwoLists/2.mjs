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

调用 merge，l1，l2 都指向第一个节点
比较两个节点，将较小的节点指向 剩下的节点(递归 merge(较小的节点之后的节点, 另外一个list)))
递归到最后是 null，直接返回另外的一个list，会往上一次递归返回
上一次调用会返回 l
  l.next=返回
  return l

l1[0] < l2[0]
  l1[0] + merge(l1[1,], l2)
else
  l2[0] + merge(l1, l2[1,])
递归
 */
const mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

export default mergeTwoLists
