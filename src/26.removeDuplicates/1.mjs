/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 *
排序数组

当前项 与 下一项 比较，相同则下一项继续往后
不同则当前项往后移，下一项继续往后

如果 cur !== next i++
=== next=next.next...

[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
i      j
[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
    i           j
[0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
       i
 */
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

export default removeDuplicates
