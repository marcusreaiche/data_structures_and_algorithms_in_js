class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Recursive function for adding a node
const searchTree = (node, data) => {
  if (data < node.data) {
    if (node.left === null) {
      node.left = new Node(data);
    }
    else {
      searchTree(node.left, data);
    }
  }
  else if (data > node.data) {
    if (node.right === null) {
      node.right = new Node(data);
    }
    else {
      searchTree(node.right, data);
    }
  }
  // Do nothing if node.data === data
}

// Recursive function for deleting a node
const removeNode = function(node, data) {
  if(node === null) {
    return null;
  }
  if(node.data === data) {
    // No children
    if(node.left === null && node.right === null) {
      return null;
    }
    // Only left child
    else if(node.right === null) {
      return node.left;
    }
    // Only right child
    else if(node.left === null) {
      return node.right;
    }
    // Both children
    else {
      let nodeTemp = node.right;
      while(nodeTemp.left) {
        nodeTemp = nodeTemp.left;
      }
      node.data = nodeTemp.data;
      node.right = removeNode(node.right, nodeTemp.data);
      return node;
    }
  }
  else if(node.data < data) {
    // apply recursion to the right node
    node.right = removeNode(node.right, data);
    return node;
  }
  else {
    // apply recursion to the left node
    node.left = removeNode(node.left, data);
    return node;
  }
}


class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    }
    searchTree(node, data);
  }

  findMin() {
    if (this.root === null) return;
    let current = this.root;
    while(current.left) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    if (this.root === null) return;
    let current = this.root;
    while(current.right) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    if(this.root === null) return null;
    let current = this.root;
    while(current.data !== data) {
      if(current.data > data) {
        current = current.left
      }
      else {
        current = current.right
      }
      if(current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    const node = this.find(data);
    return !!node;
  }

  remove(data) {
    this.root = removeNode(this.root, data);
  }
}
