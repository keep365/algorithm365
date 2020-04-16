import mergeTwoLists from './3.mjs'
/**
 * 两个升序链表
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
 */

const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
}
const l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
}

const res = mergeTwoLists(l1, l2)
console.log(JSON.stringify(res))
// {"val":1,"next":{"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":4,"next":null}}}}}}
