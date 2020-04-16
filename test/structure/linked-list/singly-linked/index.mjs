import assert from 'assert'
import SinglyLinkedList from '../../../../src/structure/linked-list/singly-linked/index.mjs'

let list = null
const data = {
  head: {
    val: undefined,
    next: null,
  },
}

describe('Singly linked list', () => {
  describe('#new SinglyLinkedList()', () => {
    it(`should add
          head: {
            val: undefined,
            next: null,
          }`, () => {
      list = new SinglyLinkedList()
    })
  })

  describe('#add()', () => {
    it(`should be
          head: {
            val: undefined,
            next: {
              val: 1,
              next: null
            },
          }`, () => {
      list.add(1)
      data.head.next = {
        val: 1,
        next: null,
      }
    })
  })

  describe('#find()', () => {
    it(`should be
          {
            val: 1,
            next: null
          }`, () => {
      const n = list.find(1)
      const data = {
        val: 1,
        next: null,
      }
      assert.equal(JSON.stringify(n), JSON.stringify(data))
    })
  })

  describe('#findBefore()', () => {
    it(`should be
          head: {
            val: 1,
            next: {}
          }`, () => {
      const n = list.findBefore(1)
      assert.equal(JSON.stringify(n), JSON.stringify(data.head))
    })
  })

  describe('#del()', () => {
    it(`should be
          head: {
            val: undefined,
            next: null,
          }`, () => {
      list.del(1)
      data.head.next = null
    })
  })

  describe('#insert()', () => {
    it(`should be
          head: {
            val: undefined,
            next: {
              val: 1,
              next: {
                val: 2,
                next: {
                  val: 3,
                  next: null,
                },
              },
            },
          }`, () => {
      const list = new SinglyLinkedList()
      list.add(1)
      list.add(3)
      list.insert(2, 1)

      const data = {
        head: {
          val: undefined,
          next: {
            val: 1,
            next: {
              val: 2,
              next: {
                val: 3,
                next: null,
              },
            },
          },
        },
      }

      assert.equal(JSON.stringify(list), JSON.stringify(data))
    })
  })

  describe('#insert(,,before)', () => {
    it(`should be
          head: {
            val: undefined,
            next: {
              val: 1,
              next: {
                val: 2,
                next: {
                  val: 3,
                  next: null,
                },
              },
            },
          }`, () => {
      const list = new SinglyLinkedList()
      list.add(1)
      list.add(3)
      list.insert(2, 3, true)

      const data = {
        head: {
          val: undefined,
          next: {
            val: 1,
            next: {
              val: 2,
              next: {
                val: 3,
                next: null,
              },
            },
          },
        },
      }

      assert.equal(JSON.stringify(list), JSON.stringify(data))
    })
  })

  afterEach(() => {
    assert.equal(JSON.stringify(list), JSON.stringify(data))
  })
})
