import isValid from './1'
// () {} []
// ({[]}) (){}[] () ([)]
// 入栈出栈，成对出，不成入，栈空为 true
const data = ['({[]})', '(){}[]', '()', '([)]']
const res = data.map(isValid)
console.log(res)
// [true, true, true, false]
