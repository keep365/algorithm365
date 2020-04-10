/**
 * @param {number} x
 * @return {boolean}
 */
// 转字符串，反向取值，比较两个串
const isPalindrome = function (x) {
  if (x >= 0 && x <= 9) return true
  if (x < 0 || x % 10 === 0) return false

  const str = String(x)
  const len = str.length
  let i = len - 1
  let reStr = ''

  while (i >= 0) {
    reStr += str[i]
    i--
  }

  const res = str === reStr
  return res
}

export default isPalindrome
