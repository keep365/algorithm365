# 14.最长公共前缀

https://leetcode-cn.com/problems/longest-common-prefix/

## 分析

- 公共前缀 = 每一项都有的前缀
- 最小项长度 <= 公共前缀长度 <= 最大项长度
- 前缀超出最小项长度则退出

## 解

### 1.暴力

- 假设第一项为长度最小的项，str，len
- 遍历 str 的每个字符，i < len，**_O(m)_**

  - 当前字符 s=str[i]
  - 遍历第二项开始的其他项，cur，j=1，**_O(n)_**
    - 判断当前项的第 i 个字符是否 = s
    - cur[j][i]===s，i++，遍历下一个字符，j=1，返回第二项开始匹配
    - !== 退出，返回当前的 s
    - === 之前判断 cur.len < str.len，则当前项为长度最短的项，设置 len 为 cur.len，避免超出最小长度后不必要的匹配

- T **_O(m\*n)_**
- S **_O(1)_**

```js
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
```
