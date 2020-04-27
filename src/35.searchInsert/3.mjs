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
按查找对应的值的方式处理
查找结束，如果没有匹配，则返回 left，此处为插入的位置

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

export default searchInsert
