// A binary min-heap of integer ids keyed by numbers, kept in typed arrays because the
// generator pushes millions of grid cells through it.
export class Heap {
  constructor(capacity = 1024) {
    this.keys = new Float64Array(capacity)
    this.ids = new Int32Array(capacity)
    this.size = 0
    this.lastKey = 0
  }

  push(id, key) {
    if (this.size === this.keys.length) {
      const keys = new Float64Array(this.size * 2)
      const ids = new Int32Array(this.size * 2)
      keys.set(this.keys)
      ids.set(this.ids)
      this.keys = keys
      this.ids = ids
    }
    const keys = this.keys
    const ids = this.ids
    let index = this.size++
    while (index > 0) {
      const parent = (index - 1) >> 1
      if (keys[parent] <= key) break
      keys[index] = keys[parent]
      ids[index] = ids[parent]
      index = parent
    }
    keys[index] = key
    ids[index] = id
  }

  // Removes the smallest entry and returns its id; its key is left in `lastKey`.
  pop() {
    const keys = this.keys
    const ids = this.ids
    const top = ids[0]
    this.lastKey = keys[0]
    const size = --this.size
    if (size > 0) {
      const key = keys[size]
      const id = ids[size]
      let index = 0
      for (;;) {
        let child = index * 2 + 1
        if (child >= size) break
        if (child + 1 < size && keys[child + 1] < keys[child]) child++
        if (keys[child] >= key) break
        keys[index] = keys[child]
        ids[index] = ids[child]
        index = child
      }
      keys[index] = key
      ids[index] = id
    }
    return top
  }

  peekKey() {
    return this.keys[0]
  }

  clear() {
    this.size = 0
  }
}
