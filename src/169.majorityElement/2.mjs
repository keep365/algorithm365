/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  nums = nums.sort()
  return nums[Math.floor(nums.length / 2)]
}

export default majorityElement
