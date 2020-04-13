# 20.有效的括号

https://leetcode-cn.com/problems/valid-parentheses/

## 分析

- () {} []
- `({[]})` | `(){}[]()` | `([)]`
- 当前字符和栈顶字符匹配
  - 如果成对，栈顶元素出栈
  - 不成对，当前字符入栈
- 如果都是成对的，最后栈是空的，否则栈里有字符

## 解

### 1.栈

- 判断空字符串和奇数长度字符串
- 遍历 s

  - 匹配栈顶字符
  - 成对出栈
  - 不成对入栈

- T **_O(n)_**
- S **_O(n)_**

```js
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
```
