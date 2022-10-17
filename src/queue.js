const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}


class Queue {
  constructor(){
    this.first = null;
    this.end = null;
  }

  getUnderlyingList() {
    if(!this.first){ //если нет первого элемента
      return null
    }
    return this.first
  }

  enqueue(value) {
    let listNode = new ListNode(value)
    if(!this.first){    
      this.first = listNode //если нет первого элемента, то вставленный узел - и начало и конец очереди
      this.end = listNode
    } else{
      this.end.next = listNode //добавить узел за последним узлом
      this.end = listNode  // назначаем бывший последний узел последним
    }
  }

  dequeue() {
    if(!this.first){
      return null
    }
    let head = this.first   //назначим переменную для сохранения начала очереди
    if(this.first === this.end){
      this.end = null
    }
    this.first = this.first.next //перемещаем ссылку на след узел

    return head.value

  }
}

module.exports = {
  Queue
};
