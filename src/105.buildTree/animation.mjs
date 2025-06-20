const preorderBox = document.getElementById('preorderBox')
const inorderBox = document.getElementById('inorderBox')
let inorderBoxChild

export function init(preorder, inorder) {
  create(preorderBox, preorder)
  inorderBoxChild = create(inorderBox, inorder)
}

function create(box, data) {
  const preorderFrag = document.createDocumentFragment()
  data.forEach((o) => {
    const li = document.createElement('li')
    li.innerText = o
    preorderFrag.appendChild(li)
  })

  box.appendChild(preorderFrag)
  return box.children
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const pointP = document.getElementById('p')
const pointS = document.getElementById('s')
const pointI = document.getElementById('i')

const origin = {
  p: null,
  s: null,
  i: null,
}

let lastStopEL = null

const obj = new Proxy(origin, {
  async set(t, p, v) {
    const el = p === 'p' ? pointP : p === 's' ? pointS : p === 'i' ? pointI : null

    if (el !== null && typeof v === 'number') {
      const d = v * 50 + 100 + (v - 1) * 10
      el.innerText = `${p}: ${v}`
      if (p === 's') {
        if (lastStopEL) {
          lastStopEL.style.background = 'none'
        }
        const stopEL = [...inorderBoxChild].find((o) => +o.innerText === v)
        if (stopEL) {
          stopEL.style.background = 'pink'
          lastStopEL = stopEL
        }
      } else {
        el.style.transform = `translateX(${d}px)`
      }
    }

    return Reflect.set(t, p, v)
  },
})

let indent = ''

function log(...args) {
  console.log(indent, ...args)
}

const curEl = document.getElementById('cur')

export const buildTree = async function (preorder, inorder) {
  obj.i = 0
  obj.p = 0

  const build = async function (stop, root, dir) {
    if (dir === 'left') {
      indent += '  '
    }

    log('')
    log('build', root?.val, dir)

    curEl.innerText = root?.val + '.' + dir

    obj.s = stop
    log('stop', stop)
    await sleep()
    alert()

    log('i', obj.i)
    log('inorder[obj.i]', inorder[obj.i])
    log('inorder[obj.i] != stop', inorder[obj.i] != stop)

    if (inorder[obj.i] != stop) {
      log('obj.p', obj.p)
      const root = new TreeNode(preorder[obj.p++])
      log('root', root)
      log('obj.p++', obj.p)
      await sleep()
      alert()

      root.left = await build(root.val, root, 'left')
      log(root?.val + '.left', root.left)

      log('')
      log('<<<')
      obj.i++
      log('obj.i++', obj.i)
      log('>>>')
      log('')

      await sleep()
      alert()

      root.right = await build(stop, root, 'right')
      log(root?.val + '.right', root.right)
      log('')

      indent = indent.replace('  ', '')

      return root
    }
    return null
  }

  return await build()
}

async function sleep() {
  return new Promise((r) => {
    setTimeout(() => {
      r()
    }, 100)
  })
}
