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

  /* push(val): Add new value to end of list */
  push(val) {
    let newNode = new DNode(val);
    if (!this.head) {
      //head is null, length of linked list is 0.
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  /* unshift(val): Adds a new node with value val to the head. Returns undefined. */
  unshift(val) {
    let newNode = new DNode(val);
    if (!this.head) {
      //head is null, length of linked list is 0.
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /* pop(val): Removes ad returns tail value. Throws error if list is empty. */
  pop() {
    if (!this.head) {
      throw new Error("The linked list is currently empty!");
    }

    let nodeToRemove = this.tail;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    }
    else {
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail.prev = null; //have to set prev of tail to null as well to completely sever the connection.
      this.tail = newTail;
    }

    this.length--;
    return nodeToRemove.val;
  }

  /* shift: Remove and return head value. Throws error if list is empty. */
  shift() {
    if (!this.head) {
      throw new Error("The linked list is currently empty!");
    }

    let nodeToRemove = this.head;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    }
    else {
      let newHead = this.head.next;
      newHead.prev = null;
      this.head.next = null;
      this.head = newHead;
    }

    this.length--;
    return nodeToRemove.val;
  }

  /* getAt(idx): Retrieve the node at index position idx. Throws error if index is invalid. */
  getAt(idx) {
    if (idx < 0 || idx >= this.length) { //Includes case of empty list.
      throw new Error("The index is not valid!");
    }

    //to speed up traversal, start from tail and go backwards if idx is closer to the end of the list.
    let currentNode = this.head;
    if (idx < (this.length/2)) {
      let currentIndex = 0;
      while (currentIndex !== idx) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      return currentNode.val;
    }
    else { //start from tail and traverse backwards.
      currentNode = this.tail;
      let currentIndex = this.length - 1;
      while (currentIndex !== idx) {
        currentNode = currentNode.prev;
        currentIndex--;
      }
      return currentNode;
    }
  }

  /* setAt(idx, val): Set value of node at index position idx to val. Throws error if index is invalid */
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("The index is not valid!");
    }

    let currentNode = this.head;
    if (idx <  (this.length/2)) {
      let currentIndex = 0;
      while (currentIndex !== idx) {
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
    else {
      currentNode = this.tail;
      let currentIndex = this.length - 1;
      while (currentIndex !== idx) {
        currentNode = currentNode.prev;
        currentIndex--;
      }
    }

    currentNode.val = val;
  }

  /* insertAt(idx, val): Insert a new node at position idx with value val. Throws error if index is invalid. */
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
      let nodeToRight = this.getAt(idx);
      let nodeToLeft = nodeToRight.prev;

      nodeToLeft.next = newNode;
      newNode.prev = nodeToLeft;
      newNode.next = nodeToRight;
      nodeToRight.prev = newNode;

      this.length++;
    }
  }

  /* removeAt(idx): Remove and return value at position idx. Throws error if index is invalid. */
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
      let nodeToRemove = this.getAt(index);
      let nodeToLeft = nodeToRemove.prev;
      let nodeToRight = nodeToRemove.next;

      nodeToLeft.next = nodeToRight;
      nodeToRight.prev = nodeToLeft;
      nodeToRemove.prev = null;
      nodeToRemove.next = null;

      this.length--;
      return nodeToRemove.val;
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