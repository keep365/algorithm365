# 66.加一

https://leetcode-cn.com/problems/plus-one/

## 分析

- 末尾开始遍历 +1
- 当前 (n+1)>9
  - n=0, i--, 前一位+1
  - i=0, 首位插入 1
- (n+1)<=9
  - break

## 解

### 1.暴力

```js
const plusOne = function (arr) {
  let num = 0
  const len = arr.length

  let i = len - 1
  while (i >= 0) {
    const n = arr[i]
    const m = n + 1
    if (m > 9) {
      arr[i] = 0

      if (i === 0) {
        arr.unshift(1)
        break
      }

      i--
    } else {
      arr[i] = m
      break
    }
  }

  return arr
}
```
