# 283.移动零

https://leetcode-cn.com/problems/move-zeroes/

## 分析

- 双指针，i，j
- i 指向当前非 0 元素，j 指向当前交换的 0
- 如果 nums[i]=0，i++，j 不动，直到下次交换
- 如果 nums[i]!=0，则交换，j++，i++

## 解

### 1.双指针

- T **_O(n)_**
- S **_O(1)_**

```js
const moveZeroes = function (nums) {
  const len = nums.length
  let i = 0
  let j = 0

  while (i < len) {
    if (nums[i] !== 0) {
      const tmp = nums[j]
      nums[j] = nums[i]
      nums[i] = tmp
      j++
    }
    i++
  }
}
```
