/**
 * @param {number} x
 * @return {number}
 */
// 都当成正整数处理，number 转换成 string，反向遍历，string 转回 number
// 负数添加 -
// 反转后 不在 [−2^31, 2^31 − 1] 中，返回 0
const reverse = function (x) {
  if (x === 0) return 0

  let prefix = ''
  if (x < 0) prefix = '-'

  const str = String(Math.abs(x))
  const len = str.length
  let i = len - 1
  let reStr = ''
  while (i >= 0) {
    reStr += str[i]
    i--
  }
  const res = Number(prefix + reStr)

  if (res < (-2) ** 31 || res > 2 ** 31 - 1) return 0
  return res
}

export default reverse
