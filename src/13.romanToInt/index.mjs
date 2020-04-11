import romanToInt from './1'
/**
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */
/**
I V,X IV 4    IX 9
X L,C XL 40   XC 90
C D,M CD 400  CM 900
 */
const data = ['III', 'IV', 'IX', 'LVIII', 'MCMXCIV']
const res = data.map(romanToInt)
console.log(res)
// [3, 4, 9, 58, 1994]
