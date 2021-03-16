/**
 * @param {number[]} nums
 * @return {number}
 */
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

export default majorityElement
