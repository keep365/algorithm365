/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
二分
12 3 45
12 3 4
len/2

tart<0 || tar>[end] return

mid=tar return mid
mid-1<tar<mid+1 return mid
mid-1=tar return mid-1
mid+1=tar return mid+1

mid<tar [mid+1, right]
mid>tar [left, mid-1]
 */
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

export default searchInsert
