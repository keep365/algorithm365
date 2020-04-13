/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const len = s.length

  if (!len) return true
  if (len % 2 !== 0) return false

  let i = 0
  const stack = []

  while (i < len) {
    const cur = s[i]
    const sLen = stack.length
    const last = stack[sLen - 1]

    if (
      sLen &&
      ((last === '(' && cur === ')') ||
        (last === '[' && cur === ']') ||
        (last === '{' && cur === '}'))
    ) {
      stack.pop()
    } else {
      stack.push(cur)
    }

    i++
  }

  return !stack.length
}

export default isValid
