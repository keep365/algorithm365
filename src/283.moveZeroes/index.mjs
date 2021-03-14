import moveZeroes from './1.mjs'

const data = [
  [1, 2, 3, 0, 0, 4, 5],
  [0, 0, 0, 3, 12],
  [0, 1, 0, 3, 12],
  [1, 0, 2, 0, 0],
]
data.forEach(moveZeroes)
console.log(data)
// [1,3,12,0,0]
// [1,2,0,0,0]
