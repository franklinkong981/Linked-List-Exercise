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

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

let lst = new LinkedList([5,10]);
lst.setAt(0,1);
lst.setAt(1,2);
console.log(lst.head.val); //1
console.log(lst.head.next.val); //2

/*
describe("push", function() {
  it("appends node and increments length", function() {
    let lst = new LinkedList();

    lst.push(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.push(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.tail.val).toBe(10);

    lst.push(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.next.val).toBe(15);
    expect(lst.tail.val).toBe(15);
  });
});

describe("unshift", function() {
  it("adds node at start and increments length", function() {
    let lst = new LinkedList();

    lst.unshift(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.unshift(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(10);
    expect(lst.head.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.unshift(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(15);
    expect(lst.head.next.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);
  });
});

describe("pop", function() {
  it("removes node at end and decrements length", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.pop()).toBe(10);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    expect(lst.length).toBe(1);

    expect(lst.pop()).toBe(5);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
  });
});

describe("shift", function() {
  it("removes node at start and decrements length", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.shift()).toBe(5);
    expect(lst.tail.val).toBe(10);
    expect(lst.length).toBe(1);

    expect(lst.shift()).toBe(10);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
  });
});

describe("getAt", function() {
  it("gets val at index", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.getAt(0)).toBe(5);
    expect(lst.getAt(1)).toBe(10);
  });
});

describe("setAt", function() {
  it("sets val at index", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.setAt(0, 1));
    expect(lst.setAt(1, 2));
    expect(lst.head.val).toBe(1);
    expect(lst.head.next.val).toBe(2);
  });
});

describe("insertAt", function() {
  it("inserts node and adjusts nearby nodes", function() {
    let lst = new LinkedList([5, 10, 15, 20]);

    lst.insertAt(2, 12);
    expect(lst.length).toBe(5);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.head.next.next.val).toBe(12);
    expect(lst.head.next.next.next.val).toBe(15);
    expect(lst.head.next.next.next.next.val).toBe(20);

    lst.insertAt(5, 25);
    expect(lst.head.next.next.next.next.next.val).toBe(25);
    expect(lst.tail.val).toBe(25);
  });

  it("inserts into empty list", function() {
    let lst = new LinkedList();

    lst.insertAt(0, 5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
  });
});

describe("removeAt", function() {
  it("removes from 1-item list", function() {
    let lst = new LinkedList(["a"]);

    lst.removeAt(0);
    expect(lst.length).toBe(0);
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
  });
});

describe("average", function() {
  it("calculates the average of items in a list", function() {
    let lst = new LinkedList([2, 3, 1, 1, 7, 6, 9]);
    expect(lst.average()).toBeCloseTo(4.1429, 4);
  });

  it("returns 0 for empty lists", function() {
    let lst = new LinkedList();
    expect(lst.average()).toBe(0);
  });
});

*/
