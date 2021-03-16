# 169.多数元素

https://leetcode-cn.com/problems/majority-element/description/

## 分析

- 出现次数 > n/2
- T **_O(n)_**
- S **_O(1)_**

## 解

### 1.Map

- T **_O(n)_**
- S **_O(n)_**

```js
const majorityElement = function (nums) {
  const obj = {}
  const n = nums.length / 2

  for (const k of nums) {
    if (k in obj) {
      obj[k]++
    } else {
      obj[k] = 1
    }
    if (obj[k] > n) return k
  }
}
```

### 2.排序

```js
const majorityElement = function (nums) {
  nums = nums.sort()
  return nums[Math.floor(nums.length / 2)]
}
```

### 3.摩尔投票法

- 多数数量 > 少数数量
- 两两抵消，余下的为多数，多数数量必定 >=1
- 抵消算法，求 n，n 假设为第一个数，count 为票数
- 遍历
- k=n -> count+1 相同的数，票数+1
- k!=n -> count-1 不相同的数，票数-1，用于抵消
- count=0 -> n=k count+1 将 n 重置，假设 k 为多数，初始票数为 1

- T **_O(n)_**
- S **_O(1)_**

```js
const majorityElement = function (nums) {
  let n = nums[0]
  let count = 0
  for (const k of nums) {
    count = n === k ? count + 1 : count - 1
    if (count === 0) {
      n = k
      count = 1
    }
  }
  return n
}
```
