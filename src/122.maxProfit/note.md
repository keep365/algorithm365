# 122.买卖股票的最佳时机 II

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/

## 分析

- 涨的都买，当前交易日价格 < 下一个交易日价格
- 跌的都不买，当前交易日价格 > 下一个交易日价格

## 解

### 1.暴力

- T **_O(n)_**
- S **_O(1)_**

```js
const maxProfit = function (prices) {
  let sum = 0

  for (let i = 0; i < prices.length; i++) {
    const cur = prices[i]
    const next = prices[i + 1]
    if (cur < next) {
      sum += next - cur
    }
  }

  return sum
}
```
