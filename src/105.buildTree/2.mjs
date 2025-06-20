/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  // pStart,pEnd preorder 中找前序
  // iStart,iEnd inorder 中找中序
  function run(pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd) return null

    const rootVal = preorder[pStart]
    const root = new TreeNode(rootVal)
    const mid = inorder.indexOf(rootVal)

    // 左子树数量
    const leftNum = mid - iStart

    root.left = run(pStart + 1, pStart + leftNum, iStart, mid - 1)
    root.right = run(pStart + leftNum + 1, pEnd, mid + 1, iEnd)

    return root
  }

  return run(0, preorder.length - 1, 0, inorder.length - 1)
}

export default buildTree
