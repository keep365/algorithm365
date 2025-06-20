# 105.从前序与中序遍历序列构造二叉树

https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

## 分析

```
         3
      /    \
    9       20
   / \     /  \
  1   2   15   7
 /
8
```

- 你可以假设树中没有重复的元素
- 前序遍历 preorder = [3,9,1,2,20,15,7]
- 中序遍历 inorder = [1,9,2,3,15,20,7]
- 前序，找出 父节点 p
- 中序，p 左边的为 左子树，p 右边的为 右子树

```
   3
9      15 20 7
          20
        15    7
```

```
root=preorder[pLeft]
mid=inorder[root].index
pLeft=pLeft+1
pRight=mid
```

## 解

### 1.递归-切分数组

- 找到根结点，位置 mid
- 切分 inorder，mid 左边为 左子树，mid 右边为 右子树
- 从 inorder 中得出 子树的数量，切分 preorder 为左右子树
- 将 preorder 和 inorder 对应的 左右子树 传入主函数，递归调用
- 当 inorder 为空时，子树处理完毕

- T **_O(n^2)_**
- S **_O(n)_**

```js
const buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null

  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)
  const mid = inorder.indexOf(rootVal)

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}
```

### 2.递归-指针标记

slice 性能优化，改用指针标记，不切分数组

- pStart, pEnd 标记 preorder 切分的前后位置
- iStart, iEnd 标记 inorder 切分的前后位置

- T **_O(n^2)_**
- S **_O(n)_**

```js
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
```

### 3.递归-Map

indexOf 优化，因为不重复，可以用 Map

- T **_O(n)_**
- S **_O(n)_**

```js
const buildTree = function (preorder, inorder) {
  const map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  // pStart,pEnd preorder 中找前序
  // iStart,iEnd inorder 中找中序
  function run(pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd) return null

    const rootVal = preorder[pStart]
    const root = new TreeNode(rootVal)
    const mid = map.get(rootVal)

    // 左子树数量
    const leftNum = mid - iStart

    root.left = run(pStart + 1, pStart + leftNum, iStart, mid - 1)
    root.right = run(pStart + leftNum + 1, pEnd, mid + 1, iEnd)

    return root
  }

  return run(0, preorder.length - 1, 0, inorder.length - 1)
}
```

### 4.O(n)

[Simple O(n) without map](<https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/34543/Simple-O(n)>)

- T **_O(n)_**
- S **_O(n)_**

- 前序 preorder 以 mid 划分 左子树 从左到右，最`右`边的节点为最后一个子节点
- 中序 inorder 以 mid 划分 左子树 从左到右，最`左`边的节点为最后一个子节点
- preorder 和 inorder 左子树 为`相反`的顺序
- preorder 和 inorder 右子树 为`相同`的顺序
- p 向右前进时，构造左子树，当 preorder[p]=inorder[i] 时，左子树构造完毕，因为 `preorder[p++]` 到最后的节点为左子树最后一个节点，i 还在起始位置，也就是左子树的第一个位置，也是最后一个节点
- 然后回溯，此时 stop 在上一个节点，即左右子树的父节点
- i++，向右前进，开始构造右子树，因为回溯后 i++，所以 i 和 p 走的步数一样，i=p
- 此时，p 在右子树根结点，i 在右子树的`子左子树`的最后一个节点
- 重复以上步骤

- 当前节点如果有右子树，右子树在右边，父节点也在右边，构造右子树时，stop 为父节点，如果 stop=右节点则没有右子树

```js
const buildTree = function (preorder, inorder) {
  let i = 0
  let p = i

  const build = function (stop) {
    if (inorder[i] != stop) {
      const root = new TreeNode(preorder[p++])
      root.left = build(root.val)
      i++
      root.right = build(stop)
      return root
    }
    return null
  }

  return build()
}
```
