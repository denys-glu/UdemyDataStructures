class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined
    } else {
      let walker = this.head;
      let runner = this.head.next;
      while (runner) {
        walker = walker.next;
        runner = runner.next;
      }
      walker.next = null;
      this.tail = walker;
    }

    this.length += 1;
    return this;
  }

  printList() {
    if (this.head == null) {
      console.log("The list is empty.");
      return this;
    }
    let str = "H: ";
    let runner = this.head;
    while (runner != null) {
      if (runner.next === null) {
        str += `T: ${runner.val}`
      } else {
        str += `${runner.val} -> `
      }
      runner = runner.next;

    }
    console.log(str);
    return this;
  }

}

const SLL = new SinglyLinkedList();
SLL.push(1);
SLL.push(2);
SLL.push(3);
console.log(SLL)