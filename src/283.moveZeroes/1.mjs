/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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

export default moveZeroes
