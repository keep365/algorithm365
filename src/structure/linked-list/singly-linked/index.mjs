class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = new Node()
  }

  add(val) {
    const node = new Node(val)
    let p = this.head
    while (p.next) {
      p = p.next
    }
    p.next = node
  }

  find(val) {
    let p = this.head
    if (!p.next) return

    while (p.val !== val) {
      p = p.next
      if (!p) return
    }
    return p
  }

  findBefore(val) {
    let p = this.head
    if (!p.next) return

    while (p.next.val !== val) {
      p = p.next
      if (!p) return
    }
    return p
  }

  del(val) {
    let p = this.head
    if (!p.next) throw new Error(`Empty list`)

    while (p) {
      if (p.next.val === val) {
        let tmp = p.next
        p.next = p.next.next
        tmp = null
        return
      }
      p = p.next
    }

    throw new Error(`Node ${val} is not exsit`)
  }

  insert(val, to, before = false) {
    const node = new Node(val)
    const p = before ? this.findBefore(to) : this.find(to)
    const tmp = p.next
    p.next = node
    node.next = tmp
  }
}

export default SinglyLinkedList
