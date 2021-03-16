/**
 * @param {number[]} prices
 * @return {number}
 */
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

export default maxProfit
