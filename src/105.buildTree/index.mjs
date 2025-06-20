// import buildTree from './1.mjs'
// import buildTree from './2.mjs'
// import buildTree from './3.mjs'
// import buildTree from './4.mjs'

import { init, buildTree } from './animation.mjs'

const preorder = [3, 9, 1, 4, 0, 5, 20, 15, 8, 7]
const inorder = [1, 9, 0, 4, 5, 3, 15, 8, 20, 7]

init(preorder, inorder)

const res = await buildTree(preorder, inorder)
console.log(res)
/**
    3
   / \
  9  20
    /  \
   15   7
 */
