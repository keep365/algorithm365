# 189.旋转数组

https://leetcode-cn.com/problems/rotate-array/

## 分析

- S **_O(1)_** 原地算法

## 解

### 1.环形替换

- 当前下标 i，目标下标 p=(i + k) % len
  - len=7,k=3,i=0
    - p=3 -> p<7,p=3=3%7
    - p=6 -> p<7,p=6=6%7
    - p=9 -> p>7,p=2=9%7
- 当前移动的元素 cur=nums[i],将 cur 移到 p 位置后，下次移动的 cur=nums[p]
- 每次替换后，i 移到 p 的位置，下次替换的 i=p
- `[1,2,3,4] k=2` 1 和 3 互换后，存在 i 又回到了 0 的位置，造成 1 3 死循环
- 引入 j，记录初始下标，当 p=j 时，表示重复，需要将 p+1 移到下一个下标
- p+1 后，j=p，记录避免下一轮死循环的初始位置，并将下一轮初始替换元素 cur=nums[p]
- 每次替换后 count+1，表示移动过的次数，当 count=len 时，表示全部移动结束，终止循环

- T **_O(n)_**
- S **_O(1)_**

```js
const rotate = function (nums, k) {
  const len = nums.length
  k = k % len

  if (k === 0) return nums

  let i = 0
  let j = i
  let cur = nums[i]
  let count = 0

  while (count < len) {
    let p = (i + k) % len

    const tmp = nums[p]
    nums[p] = cur
    cur = tmp
    count++

    if (j === p) {
      p++
      j = p
      cur = nums[p]
    }

    i = p
  }

  return nums
}
```
