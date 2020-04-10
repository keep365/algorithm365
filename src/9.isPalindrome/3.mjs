/**
 * @param {number} x
 * @return {boolean}
 */
// 取余数，反向运算，只取一半，回文对称
const isPalindrome = function (x) {
  if (x >= 0 && x <= 9) return true
  if (x < 0 || x % 10 === 0) return false

  const str = String(x)
  let len = str.length
  const end = len / 2
  let i = len - 1

  let old = x
  let n = 0

  let j = 0
  let m = ''

  while (old !== 0 && i >= end) {
    const mod = old % 10
    old = parseInt(old / 10)
    n = n * 10 + mod
    m += str[j]
    i--
    j++
  }

  const res = +m === n
  return res
}

export default isPalindrome
