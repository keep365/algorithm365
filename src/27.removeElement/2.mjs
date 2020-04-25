/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
i j
j != val copy j->i, i++ j++
j=val j++
 */
const removeElement = function (nums, val) {
  const len = nums.length
  let i = 0
  let j = 0

  while (j < len) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
    j++
  }

  return i
}

export default removeElement
