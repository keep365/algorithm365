/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 遍历每一项，并且遍历后续每一项是否有和当前项相加为 target，有则返回
const twoSum = function (nums, target) {
  let len = nums.length
  let i = 0

  while (i < len - 1) {
    let j = i + 1

    while (j < len) {
      const sum = nums[i] + nums[j]
      if (sum === target) {
        return [i, j]
      }
      j++
    }
    i++
  }
}

export default twoSum
