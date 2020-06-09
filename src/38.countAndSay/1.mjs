/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  function getNext(s) {
    let m = 1
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

  let i = 1
  let j = '1'

  while (i < n) {
    j = getNext(j)
    i++
  }
  return j
}

export default countAndSay
