/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
tart<0 || tar>[end] return

遍历
  cur=tar return i
  cur>tar reutrn i
  cur<tart i++
 */
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

export default searchInsert
