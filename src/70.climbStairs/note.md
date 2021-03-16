# 70.爬楼梯

https://leetcode-cn.com/problems/climbing-stairs/

## 分析

- 先走 1，或先走 2
- 1，剩下 n-1 的走法
- 2，剩下 n-2 的走法
- f(n)=f(n-1)+f(n-2)
- f(1)=1
- f(2)=2

## 解

### 1.动态规划

- T **_O(n)_**
- S **_O(n)_**

```js
const climbStairs = function (n) {
  const f = {}
  f[1] = 1
  f[2] = 2

  if (n <= 2) return f[n]

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }

  return f[n]
}
```
