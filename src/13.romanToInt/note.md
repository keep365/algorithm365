# 13.罗马数字转整数

https://leetcode-cn.com/problems/roman-to-integer/

## 分析

- 字符 和 数值 对应
- I V,X | X L,C | C D,M 三组为减法

## 解

### 1.哈希表存储

- 遍历，当前项 和 下一项 是否匹配 减法的三组

  - 匹配，做减法，i+=2
  - 不匹配，做加法，i++

- T **_O(n)_**

```js
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
```
