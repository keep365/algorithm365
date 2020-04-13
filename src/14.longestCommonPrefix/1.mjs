/**
 * @param {string[]} strs
 * @return {string}
 */
// 遍历第一项的每一个字符，判断其他项是否都有，没有就退出
// 有就继续遍历下个字符，并且找到长度最短的那一项，作为字符遍历的条件
const longestCommonPrefix = function (strs) {
  let res = ''
  if (!strs.length) return res

  const str = strs[0]
  let len = str.length
  let i = 0

  const arrLen = strs.length
  let j = 1

  while (i < len) {
    const s = str[i]

    while (j < arrLen) {
      const cur = strs[j]
      const curLen = cur.length
      if (curLen < len) len = curLen

      if (s === cur[i]) {
        j++
      } else {
        return res
      }
    }

    res += s
    i++
    j = 1
  }

  return res
}

export default longestCommonPrefix
