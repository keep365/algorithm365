/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 哈希表，保存当前项，并且查找表中是否有剩余一项，有则返回，没有继续
// {val: index}
const twoSum = function (nums, target) {
  let len = nums.length
  let i = 0
  const obj = {}

  while (i < len) {
    const cur = nums[i]
    const rest = target - cur
    if (typeof obj[rest] !== 'undefined') return [i, obj[rest]]
    obj[cur] = i
    i++
  }
}

export default twoSum
