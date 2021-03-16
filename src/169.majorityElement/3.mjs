/**
 * @param {number[]} nums
 * @return {number}
 */
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

export default majorityElement
