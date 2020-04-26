/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/**
双指针
haystack i
needle j

遍历 needle j
  n[j]=h[i] i++ j++
  != 重置 j=0, i=i-j 减去已经匹配的长度，还原到本次匹配的第一个字符 i++ 从匹配到的第一个字符的下一个字符开始重新匹配
 */
const strStr = function (haystack, needle) {
  if (!needle || haystack === needle) return 0
  if (!haystack) return -1

  const hLen = haystack.length
  const nLen = needle.length

  if (hLen < nLen) return -1

  let i = 0
  let j = 0

  while (j < nLen) {
    if (i === hLen) return -1

    if (haystack[i] === needle[j]) {
      j++
    } else {
      i = i - j
      j = 0
    }
    i++
  }

  return i - nLen
}

export default strStr
