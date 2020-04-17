# 26.删除排序数组中的重复项

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

## 分析

- 排序数组
- 原地删除，修改原数组 返回长度
- 不能使用额外的数组空间，空间 O(1)
- [1,1,2] -> [1,2,...]
- [0,0,1,1,1,2,2,3,3,4] -> [0,1,2,3,4,...]

## 解

### 1.双指针

- 当前项 i 与 下一项 j 比较
- i=j 则下一项继续往后，j++，已经排好序，j 只管往后移，直到数组末尾
- !=，将不同的项放到 i 后面，i.next=j
- i++ 作为下一次比较的项

- T **_O(n)_**
- S **_O(1)_**

```js
const removeDuplicates = function (nums) {
  const len = nums.length
  if (len < 2) return nums

  let i = 0
  let j = 0

  while (j < len - 1) {
    const cur = nums[i]
    const next = nums[++j]

    if (cur !== next) {
      nums[++i] = next
    }
  }

  return i + 1
}
```
