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
    if (!this.head) return undefined

    let runner = this.head;
    let walker = runner;
    while (runner.next) {
      walker = runner;
      runner = runner.next;
    }

    this.tail = walker;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return runner;
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

  shift() {
    if (!this.head) return undefined

    let temp = this.head
    this.head = temp.next
    this.length--
    
    return temp
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length ) return null
    if (!this.head) return "List is empty"

    let walker = this.head
    let steps = 0
    while(steps <= this.length) {
      if(index === steps) {
        return walker
      }
      walker = walker.next
      steps++
    }
    return null
  }

  set(index, value) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = value
      return true
    } 
    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length ) return false
    if (index === 0) {
      this.unshift(value)
      return true
    }

    if (index === this.length) {
      this.push(value)
      return true
    }
    let newNode = new Node(value)
    let previous = this.get(index - 1)
    newNode.next = previous.next
    previous.next = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length ) return undefined
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()
     
    let chosenOne = this.get(index - 1)
    let result = chosenOne.next.value
    chosenOne.next = chosenOne.next.next
    this.length--
    
    return result
  }

  reverse() {
    if(!this.head) return undefined
    let previous = null, 
        current = this.head,
        next = null

      //this.head = this.tail
        this.tail = current

    while(current) {
      next = current.next // saving next pointer
      current.next = previous // actual reversing
      previous = current // moving forward
      current = next // moving forward
    }
    this.head = previous
    return this
  }
}

const SLL = new SinglyLinkedList();
SLL.push(1);
SLL.push(2);
SLL.push(3);
console.log(SLL)