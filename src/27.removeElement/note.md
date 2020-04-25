# 27.移除元素

https://leetcode-cn.com/problems/remove-element/

## 分析

- 原地删除某个数，返回新的长度
- 原地修改原数组，S O(1)
- 不考虑顺序，超出部分

```
nums = [3,2,2,3], val = 3,
nums = [2, 2, ...], len=2

nums = [0,1,2,2,3,0,4,2], val = 2,
nums = [0, 1, 3, 0, 4, ...], len=5
```

## 解

### 1.暴力

- i 当前项，j 下一项
- nums[i]=val 时
  - nums[j]=val j++ 直到 等于数组长度，返回 i
  - nums[j]!=val 将 nums[i] 和 nums[j] 交换，i++ 继续遍历
- nums[i]!=val 时，i++ 遍历后面的
- 当 j++=len 时，到最后一项了，返回 i

```js
const removeElement = function (nums, val) {
  const len = nums.length
  if (!len) return 0
  if (len === 1) {
    if (nums[0] === val) return 0
    return 1
  }

  let i = 0
  let j = 0

  while (i < len) {
    const cur = nums[i]

    if (cur === val) {
      j = i + 1
      if (j === len) return i

      while (nums[j] && nums[j] === val) {
        j++
        if (j === len) return i
      }

      nums[i] = nums[j]
      nums[j] = cur
    }

    i++
  }

  return i
}
```

### 2.双指针

- 将不等于 val 的项复制到当前项
- i，j
- nums[j]!=val，将 j 复制到 i，i++，j++
- nums[j]=val，j++

- T **_O(n)_**
- S **_O(1)_**

```js
const removeElement = function (nums, val) {
  const len = nums.length
  let i = 0
  let j = 0

  while (j < len) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
    j++
  }

  return i
}
```

### 3.双指针优化

- 之前的算法会对前四个元素做不必要的复制操作
  - num=[1，2，3，5，4]，Val=4
- 不必要的移动操作
  - num=[4，1，2，3，5]，Val=4
- nums[i] = val 时，和最后一项交换，并且数组 len - 1

- T **_O(n)_**
- S **_O(1)_**

```js
const removeElement = function (nums, val) {
  let len = nums.length
  let i = 0

  while (i < len) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1]
      len--
    } else {
      i++
    }
  }

  return len
}
```
