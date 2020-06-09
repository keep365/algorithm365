import countAndSay from './2.mjs'
/**
1.     1
2.     11
3.     21
4.     1211
5.     111221

len>=2 连续2+ 合并

m=1 s=''
  i=i+1
    m+1
    i++
    continue
  
    i++
    s+=m+i
    m=1
 */
const data = Math.floor(Math.random() * 30 + 1)
const res = countAndSay(data)
console.log(data, res)
