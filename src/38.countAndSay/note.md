# 38.外观数列

https://leetcode-cn.com/problems/count-and-say/

## 分析

- m=1 计数，s=''保存结果，默认从 1 开始，遍历 s，i
- 比较当前与后一项，相等则 m+1，往后移一个
- 不相等则赋值 s，m 重置为 1，i++

- T **_O(m\*n)_**
- S **_O(1)_**

## 解

### 1.暴力

```js
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
```

### 2.递归

```js
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
```
