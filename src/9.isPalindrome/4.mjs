/**
 * @param {number} x
 * @return {boolean}
 */
// 取余数，反向运算，只取一半，回文对称
// 偶数：原始数字/10 后 = 反转数字，则已经取了一半，停止循环
// 奇数：原始数字/10 后 < 反转数字，则已经取了一半，停止循环，此时 反转数字多了一个 中位数，需要将反转数字/10，才能与 原始数字相等
const isPalindrome = function (x) {
  if (x >= 0 && x <= 9) return true
  if (x < 0 || x % 10 === 0) return false

  let old = x
  let n = 0

  while (old > n) {
    const mod = old % 10
    old = parseInt(old / 10)
    n = n * 10 + mod
  }
  const res = old === n || old === parseInt(n / 10)
  return res
}

export default isPalindrome
