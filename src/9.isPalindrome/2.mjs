/**
 * @param {number} x
 * @return {boolean}
 */
// 取余数，反向运算
const isPalindrome = function (x) {
  if (x >= 0 && x <= 9) return true
  if (x < 0 || x % 10 === 0) return false

  let old = x
  let n = 0

  while (old !== 0) {
    const mod = old % 10
    old = parseInt(old / 10)
    n = n * 10 + mod
  }

  const res = x === n
  return res
}

export default isPalindrome
