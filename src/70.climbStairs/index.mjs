import climbStairs from './1.mjs'

/**
 * n=2
 * 1+1
 * 2
 * 
 * n=3
 * 1+1+1
 * 1+2
 * 2+1
 * 
 * n=5
 * 4      3
 * 3 2    1 2
 * 1 2 2  1 2
 * 
 * n=6
 * 5       4
 * 8       5
 */

const data = [2, 3, 5, 45]
const res = data.map(climbStairs)
console.log(res)
// [2, 3]
