/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.length) {
      throw new Error("The list is empty!");
    }

    let nodeToRemove = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return nodeToRemove.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.length) {
      throw new Error("The list is empty!");
    }

    let nodeToRemove = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = this.head.next;
    }

    this.length--;
    return nodeToRemove.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0) {
      throw new Error ("The index supplied must be >= 0!");
    }
    else if (idx >= this.length) {
      throw new Error("The index supplied must be between 0 and ${this.length - 1}!");
    }

    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0) {
      throw new Error ("The index supplied must be >= 0!");
    }
    else if (idx >= this.length) {
      throw new Error("The index supplied must be between 0 and ${this.length - 1}!");
    }

    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0) {
      throw new Error ("The index supplied must be >= 0!");
    }
    else if (idx > this.length) {
      throw new Error("The index supplied must be between 0 and ${this.length - 1}!");
    }
    //cases: 1. Inserting into empty list. 2. Inserting as the first element. 3. Inserting as the last element. 4. Inserting in the middle.
    //Inserting into empty list OR inserting as last element.
    if (this.length === 0 || idx === this.length) {
      this.push(val);
    }
    //Inserting as the first element.
    else if (idx === 0) {
      this.unshift(val);
    }
    //Inserting in the middle
    else {
      let newNode = new Node(val);
      let currentIndex = 0;
      let currentNode = this.head;
      let prevNode = null;
      while (currentIndex < idx) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      prevNode.next = newNode;
      newNode.next = currentNode;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0) {
      throw new Error ("The index supplied must be >= 0!");
    }
    else if (idx >= this.length) {
      throw new Error("The index supplied must be between 0 and ${this.length - 1}!");
    }
    //cases: 1. Removing the first element. 2. Removing the last element. 3. Removing a middle node.
    //Removing the last element.
    if (idx === this.length-1) {
      this.pop();
    }
    //Removing the first element.
    else if (idx === 0) {
      this.shift();
    }
    //Removing an element in the middle.
    else {
      let currentIndex = 0;
      let currentNode = this.head;
      let prevNode = null;
      while (currentIndex < idx) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      //now, currentNode is the node we want to remove.
      prevNode.next = currentNode.next;
      this.length--;
    }
  }

  /** average(): return an average of all values in the list. Returns 0 for an empty list. */

  average() {
    if (!this.head) {
      return 0;
    }

    let currentNode = this.head;
    let sum = this.head.val;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      sum += currentNode.val;
    }
    return sum / this.length;
  }
}

/* DNode: Node for a doubly linked list. This node has 2 pointers: next (next node) and prev (previous node). */
class DNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** DoublyLinkedList: chained together Dnodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
}