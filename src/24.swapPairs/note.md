# 24.两两交换链表中的节点

https://leetcode-cn.com/problems/swap-nodes-in-pairs/

## 分析

- next = list.next
- list.next -> next.next
- next.next -> list
- return next

## 解

### 1.暴力

- pre -> head -> next -> end
- tmp = pre // 每次移动 tmp 到交换后的后一个节点，链接之后的链表
- head -> end
- next -> head
- tmp -> next // 第一次时，将 pre 指向 交换后的 next，pre.next 即为交换后的链表，下一步之后 tmp 指向交换后的前一个节点，以此链接到之后交换的链表
- tmp = start // 将 tmp 移动到下次交换的前一个节点，交换后可使上一步链接到交换后链表

```js
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
```

### 2.递归

```
[1, 2, 3, 4]
[2, 1, 4, 3]
```

- 两两交换为一组，从后往前看
- 每次交换后返回，上一组未交换的 list 指向 交换后的节点
- 递归交换上一组，直到第一组

```js
const swapPairs = function (list) {
  if (list === null || list.next === null) return list
  const next = list.next
  list.next = swapPairs(next.next)
  next.next = list
  return next
}
```
