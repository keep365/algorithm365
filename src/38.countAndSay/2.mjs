/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  if (n === 1) return '1'

  let m = 1
  let s = countAndSay(n - 1)
  let str = ''
  
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    const nex = s[i + 1]
    if (cur === nex) {
      m++
      continue
    }
    str += m + cur
    m = 1
  }
  return str
}

export default countAndSay
