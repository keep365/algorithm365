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

export default climbStairs
