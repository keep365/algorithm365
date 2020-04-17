import removeDuplicates from './1.mjs'

// 排序数组
// 原地删除 返回长度
// 不能使用额外的数组空间，空间 O(1)
// [1,1,2] -> [1,2,...]
// [0,0,1,1,1,2,2,3,3,4] -> [0,1,2,3,4,...]

// const data = [1, 1, 2]
const data = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const len = removeDuplicates(data)
data.length = len
console.log(data)
// []
