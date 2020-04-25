/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
i j

cur=val, j=i+1
  nex=val, j++...=len, return i
  nex!=val, cur<->nex, i++

cur!=val, i++
 */
const removeElement = function (nums, val) {
  const len = nums.length
  if (!len) return 0
  if (len === 1) {
    if (nums[0] === val) return 0
    return 1
  }

  let i = 0
  let j = 0

  while (i < len) {
    const cur = nums[i]

    if (cur === val) {
      j = i + 1
      if (j === len) return i

      while (nums[j] && nums[j] === val) {
        j++
        if (j === len) return i
      }

      nums[i] = nums[j]
      nums[j] = cur
    }

    i++
  }

  return i
}

export default removeElement
