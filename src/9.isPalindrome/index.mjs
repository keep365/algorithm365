import isPalindrome from './4.mjs'

// 整数
// 个位数 true，负数 false
// 末位是0，回文后首位是0，不符合，排除
const num = [10, 12321, 22, -11, 0]
const res = num.map(isPalindrome)
console.log(res)
// [false, true, true, false, true]
