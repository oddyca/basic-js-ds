const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.front = null
    this.last = null
    this.next = null
}

  getUnderlyingList() {
    return this.front
  }

  enqueue(value) {
    let node = new ListNode(value)
    if (this.front === null) {
      this.front = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
  }

  dequeue() {
    let node = this.front;
    this.front = this.front.next;
    return node.value;
  }
}

module.exports = {
  Queue
};
