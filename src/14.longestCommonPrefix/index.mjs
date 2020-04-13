import longestCommonPrefix from './1'
/**
["flower","flow","flight"] -> "fl"
["dog","racecar","car"] -> ''

公共前缀=每一项都有的前缀，不能超出长度最短的项
 */
// const data = ['flower', 'flow', 'flight']
const data = ['dog', 'd', 'dar']
const res = longestCommonPrefix(data)
console.log(res)
// 'fl'
