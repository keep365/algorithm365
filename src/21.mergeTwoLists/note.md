# 21.合并两个有序链表

https://leetcode-cn.com/problems/merge-two-sorted-lists/

## 分析

- 升序

## 解

### 1.暴力

- 把 l2 中的每个节点插入到 l1 中
- l2<=l1，插入到 l1 之前
- else l1++ 直到 l2<=l1
- 找到比 l2 大的节点 n，然后找到 n 的前一个节点 p
- 把 l2 插入 p 后面

- T **_O(m\*n)_** l2.len \* l1.len
- S **_O(1)_**

```js
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
```

## 2.递归

- 调用 merge，l1，l2 都指向第一个节点
- 比较两个节点，将较小的节点指向 剩下的节点(递归 merge(较小的节点之后的节点, 另外一个 list)))
- 递归到最后是 null，直接返回另外的一个 list，会往上一次递归返回
- 上一次调用会返回 上一个节点

- T **_O(m+n)_** l1.len + l2.len
- S **_O(m+n)_** l1.len + l2.len 调用栈深度

```js
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
```

## 3.迭代

- 将 l1 l2 插入到一个新的链表
- 设置一个头节点，记录插入后的链表
- 将 l1 和 l2 中较小的插入，记录当前的项为下次比较的前一项 prev
- 插入后 l1 或 l2 指针往后移，继续比较两项
- 重复将较小的项插入到 prev 的后面

- T **_O(m+n)_** l1.len + l2.len
- S **_O(1)_** 只是移动指针

```js
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
```
