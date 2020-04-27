import searchInsert from './2.mjs'

const data = [
  // [[1, 3, 5, 6], 5],
  // [[1, 3, 5, 6], 2],
  // [[1, 3, 5, 6], 7],
  // [[1, 3, 5, 6], 0],
  [[1, 3], 3],
  [[1, 3], 2],
  [[1, 3, 5], 4],
  [[2, 3, 5, 6, 9], 7],
]
const res = data.map(([nums, target]) => searchInsert(nums, target))
console.log(res)
// []
