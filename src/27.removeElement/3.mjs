/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
num=[1，2，3，5，4]，Val=4
之前的算法会对前四个元素做不必要的复制操作。

num=[4，1，2，3，5]，Val=4
似乎没有必要将 [1，2，3，5] 这几个元素左移一步，

当我们遇到 nums[i]=val 时，我们可以将当前元素与最后一个元素进行交换，并释放最后一个元素。这实际上使数组的大小减少了 1。
 */
const removeElement = function (nums, val) {
  let len = nums.length
  let i = 0

  while (i < len) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1]
      len--
    } else {
      i++
    }
  }

  return len
}

export default removeElement
