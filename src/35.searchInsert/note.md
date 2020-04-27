# 35.搜索插入位置

https://leetcode-cn.com/problems/search-insert-position/

## 分析

- 已排序
- 存在，返回 i
- 不存在，返回插入的位置 i

## 解

### 1.暴力

- 当前项>=target，返回 i，相等或插入都是 i
- 否则 i++

- T **_O(n)_**
- S **_O(1)_**

```js
const searchInsert = function (nums, target) {
  const len = nums.length
  if (!len || target <= nums[0]) return 0
  if (target === nums[len - 1]) return len - 1
  if (target > nums[len - 1]) return len

  let i = 0

  while (i < len) {
    if (nums[i] >= target) return i
    i++
  }
}
```

### 2.二分-左右匹配

- mid=target return mid
- mid-1=target return mid-1
- mid+1=target return mid+1
- mid-1<target<mid return mid
- mid<target<mid+1 return mid+1

- T **_O(logn)_**
- S **_O(1)_**

```js
const searchInsert = function (nums, target) {
  const len = nums.length
  if (!len || target <= nums[0]) return 0
  if (target === nums[len - 1]) return len - 1
  if (target > nums[len - 1]) return len

  let left = 0
  let right = len - 1
  let mid = Math.floor((right + left) / 2)

  while (nums[mid] !== target) {
    if (nums[mid - 1] === target) return mid - 1
    if (nums[mid + 1] === target) return mid + 1

    if (nums[mid - 1] < target && nums[mid] > target) return mid
    if (nums[mid] < target && nums[mid + 1] > target) return mid + 1

    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    mid = Math.floor((right + left) / 2)
  }

  return mid
}
```

### 3.二分-按查找处理

- 按照二分查找值处理
- 有就返回，没有就继续二分，直到剩下一个
- 最后剩下的 left 就是要插入的位置

- T **_O(logn)_**
- S **_O(1)_**

```js
const searchInsert = function (nums, target) {
  const len = nums.length

  let left = 0
  let right = len - 1
  let mid = Math.floor((right + left) / 2)

  while (left <= right) {
    if (nums[mid] === target) return mid

    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    mid = Math.floor((right + left) / 2)
  }

  return left
}
```
