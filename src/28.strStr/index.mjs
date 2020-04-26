import strStr from './1.mjs'

const data = [
  ['', '12'],
  ['1234', ''],
  ['1234', '46'],
  ['12346', '46'],
  ['4234', '46'],
  ['46234', '46'],
  ['4', '46'],
  ['1', '46'],
  ['mississippi', 'issip'],
]
const res = data.map(([haystack, needle]) => strStr(haystack, needle))
console.log(res)
// []
