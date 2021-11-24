class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = new Node(value);
          return this;
        }
        current = current.left;
      }

      if (value > current.value) {
        if (current.right === null) {
          current.right = new Node(value);
          return this;
        }
        current = current.right;
      }

    }
  }
  insertRHelper(value, walker) {
    if (value < walker.value) {
      if (walker.left === null) {
        walker.left = new Node(value);
        return this;
      }
      return this.insertRHelper(value, walker.left);
    }

    if (value > walker.value) {
      if (walker.right === null) {
        walker.right = new Node(value);
        return this;
      }
      return this.insertRHelper(value, walker.right);
    }
  }

  insertR(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }

    return this.insertRHelper(value, this.root)
  }
}

let tree = new BST();

tree.insertR(50);
tree.insertR(35);
tree.insertR(55);
tree.insertR(52);
tree.insertR(53);
console.log(tree)