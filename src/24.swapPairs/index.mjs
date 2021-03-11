// import swapPairs, { ListNode } from './1.mjs'
// import swapPairs, { ListNode } from './2.mjs'
import swapPairs, { ListNode } from './3.mjs'

const l0 = new ListNode()

const l1 = new ListNode(1)

const l2 = new ListNode(1)
l2.next = new ListNode(2)

const l3 = new ListNode(1)
l3.next = new ListNode(2)
l3.next.next = new ListNode(3)

const l4 = new ListNode(1)
l4.next = new ListNode(2)
l4.next.next = new ListNode(3)
l4.next.next.next = new ListNode(4)

const data = [l0, l1, l2, l3, l4]
const res = data.map(swapPairs)
console.log(JSON.stringify(res))
// []
