//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null
  }
}

export class LinkedList {
  constructor() {
    this.head = null,
    this.tail = null,
    this.length = 0
  }
  push(value) {
    const newNode = new Node(value)
    if(!this.head) this.head = this.tail = newNode
    else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  pop() {
    const removedNode = this.tail
    if(!removedNode.prev && !removedNode.next) this.head = this.tail = null
    else {
      this.tail = removedNode.prev
      this.tail.next = null
    }
    this.length--
    return removedNode.value
  }

  shift() {
    const removedNode = this.head
    if(!removedNode.prev && !removedNode.next) this.head = this.tail = null
    else {
      this.head = removedNode.next
      this.head.prev = null
    }
    this.length--
    return removedNode.value
  }

  unshift(value) {
    const newHeadNode = new Node(value)
    if(!this.head) this.head = this.tail = newHeadNode
    else {
      this.head.prev = newHeadNode
      newHeadNode.next = this.head
      this.head = newHeadNode
    }
    this.length++
  }

  delete(targetValue) {
    let node = this.head
    while(node) {
      if(node.value === targetValue) break
      else node = node.next
    }
    if(!node) return
    if(!node.prev) {
      this.shift()
      return
    }
    else if (!node.next) {
      this.pop()
      return
    }
    else {
      node.prev.next = node.next
      node.next.prev = node.prev
    }
    this.length--
  }

  count() {
    return this.length
  }
}
