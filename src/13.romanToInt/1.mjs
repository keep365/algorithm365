/**
 * @param {string} s
 * @return {number}
 */
// map 保存 字符:数值
// 遍历 input -> 是否减法，取下一项 -> map
const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const checkMinus = (p, n) => {
  if (p === 'I') return n === 'V' || n === 'X'
  if (p === 'X') return n === 'L' || n === 'C'
  if (p === 'C') return n === 'D' || n === 'M'
}

const romanToInt = function (s) {
  const len = s.length
  let i = 0
  let j = 0

  let n = 0

  while (i < len) {
    j = i + 1
    const cur = s[i]
    const nex = s[j]

    const isMinus = checkMinus(cur, nex)

    if (isMinus) {
      n += map[nex] - map[cur]
      i += 2
    } else {
      n += map[cur]
      i++
    }
  }

  return n
}

export default romanToInt
