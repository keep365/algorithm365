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

export default plusOne
