# 28.实现 strStr

https://leetcode-cn.com/problems/implement-strstr/

## 分析

- 'abc' find 'bc' return 1
- neede 为空，返回 0

## 解

### 1.暴力

- 双指针 haystack[i] needle[j]
- 首先从 haystack 中匹配 needle 第一个字符
- 然后 i++ j++ 比较后面的
- h[j]=n[j] i++ j++ 继续匹配后面的
- != 将 j 回退到 0，重新开始，将 i 回退到 i-j+1，即 h 中的下一个字符

- T **_O(m\*n)_**
- S **_O(1)_**

```
h: 11111111112=m
n: 12=n
```

```js
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
```
