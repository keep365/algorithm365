/**
 * @param {number} x
 * @return {number}
 */
// 123 % 10=3 -> 3   = 0  * 10 + 3
// 12 %  10=2 -> 32  = 3  * 10 + 2
// 1  %  10=1 -> 321 = 32 * 10 + 1
// mod = x % 10
// x = x / 10
// res = res * 10 + mod
// x/10 求余数，如果只剩1位，/10 后变成 (-1, 1) 之间的数，中断递归
// 如果 /10 还是整数，则继续，每次将 上次的余数*10+本次的余数=下次递归开始的数
// 如果相加后导致溢出，那么直接 return 0
// 1. 溢出条件，res >= max / 10
// 2. res > max，一定溢出
// 3. res = max，mod > 7 一定溢出
// 7 或 8 是因为最大值2的31次方是2147483648，最小值负2的31次方减一是-2147483647，这两个数值的个位数是7和8

const MAX = 2 ** 31 - 1
const MAX_MOD = MAX % 10
const MIN = (-2) ** 31
const MIN_MOD = MIN % 10

const reverse = function (x) {
  if (x === 0) return 0

  let start = x
  let res = 0

  while (start !== 0) {
    const mod = start % 10
    start = parseInt(start / 10)

    if (res > MAX / 10 || (res === MAX / 10 && mod > MAX_MOD)) return 0
    if (res < MIN / 10 || (res === MIN / 10 && mod < MIN_MOD)) return 0

    res = res * 10 + mod
  }

  return res
}

export default reverse
