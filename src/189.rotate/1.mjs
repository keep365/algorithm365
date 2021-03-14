/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
[1, 2, 3, 4, 5, 6, 7], k=3     567   7-3=4  i=4
[5 ,6 ,7 ,1 ,2 ,3 ,4]
14 73 62 5

4   3->6   3+3
5   4->0   4+3-7
6   5->1   5+3-7
7   6->2   6+3-7

[1, 2, 3, 4, 5, 6, 7], k=4     67    len-k=3  j=3
[4, 5, 6, 7, 1, 2, 3],         67    [i=j, ..., i=len-1, i=0, ..., i=j-1]
 0  1  2  3  4  5  6
 
4+4-7=1
i+k-len=j

i=0
cur=arr[i]

while i+k<len

  p=i+k
  tmp=arr[p]
  arr[p]=cur

  j=p+k-len
  cur=arr[j]
  arr[j]=tmp

  i++
 */
const rotate = function (nums, k) {
  const len = nums.length
  k = k % len

  if (k === 0) return nums

  let i = 0
  let j = i
  let cur = nums[i]
  let count = 0

  while (count < len) {
    let p = (i + k) % len

    const tmp = nums[p]
    nums[p] = cur
    cur = tmp
    count++

    if (j === p) {
      p++
      j = p
      cur = nums[p]
    }

    i = p
  }

  return nums
}

export default rotate
