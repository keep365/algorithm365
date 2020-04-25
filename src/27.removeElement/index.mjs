import removeElement from './3.mjs'

const nums1 = [3, 2, 2, 3]
const val1 = 3

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
const val2 = 2

const data = [
  [nums1, val1],
  [nums2, val2],
  [[1], 1],
  [[1], 2],
  [[4, 5], 4],
]

const res = data.map(([nums, val]) => {
  const len = removeElement(nums, val)
  nums.length = len
  return [len, nums]
})

console.log(res)
