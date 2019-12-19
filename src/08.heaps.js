function MinHeap() {
  // Min heap property: every node is smaller or equal than every of its children
  // We implement the array representation of the heap
  // The following relations are verified:
  // idx -> left child: 2 * idx
  //     -> right child: 2 * idx + 1
  // idx -> parent: Math.floor(idx / 2)
  const heap = [-Infinity]; // -Infinity at index 0

  // Methods
  this.print = () => heap;
  this.size = () => heap.length - 1;

  this.insert = function(element) {
    // Insert an element in the min heap such that the heap property is satisfied
    heap.push(element);
    if(heap.length > 2) {
      let idx = heap.length - 1;
      while(heap[idx] < heap[getParent(idx)]) {
        // swap child and parent position
        swap(idx, getParent(idx));
        // update idx
        idx = getParent(idx);
      }
    }
  }

  this.remove = function() {
    // Remove and return the smallest element of the min heap and rearrange the heap
    if (heap.length === 1) return;
    const smallest = heap[1]
    const lastIdx = heap.length - 1;
    // swap root with last leaf
    [heap[1], heap[lastIdx]] = [heap[lastIdx], heap[1]];
    // remove last leaf
    heap.pop();
    // rearrange heap
    rearrangeHeap(1);
    // return the smallest element
    return smallest;
  }

  this.sort = function() {
    const result = [];
    while(this.size()) {
      result.push(this.remove());
    }
    return result;
  }

  // Auxiliary functions
  function getParent(idx) {
    return Math.floor(idx / 2);
  }

  function swap(i, j) {
    if(i < heap.length && j < heap.length) {
      [heap[i], heap[j]] = [heap[j], heap[i]];
    }
  }

  function rearrangeHeap(idx) {
    // Recursive function that rearranges the heap
    const leftChild = idx * 2;
    const rightChild = leftChild + 1;
    let minChild = (rightChild < heap.length && heap[rightChild] < heap[leftChild])
                 ? rightChild
                 : leftChild;
    if(minChild < heap.length && heap[idx] > heap[minChild]) {
      swap(idx, minChild);
      rearrangeHeap(minChild);
    }
  }
}


function MaxHeap() {
  // Max heap property: every node is greater or equal than every of its children
  const heap = [Infinity]; // Infinity at index 0

  // Methods
  this.print = () => heap;
  this.size = () => heap.length - 1;

  this.insert = function(element) {
    // Insert an element in the max heap such that the max heap property is satisfied
    heap.push(element);
    if(heap.length > 2) {
      let idx = heap.length - 1;
      while(heap[idx] > heap[getParent(idx)]) {
        // swap child and parent position
        swap(idx, getParent(idx));
        // update idx
        idx = getParent(idx);
      }
    }
  }

  this.remove = function() {
    // Remove and return the greatest element of the max heap and rearrange the heap
    if (heap.length === 1) return;
    const greatest = heap[1]
    const lastIdx = heap.length - 1;
    // swap root with last leaf
    [heap[1], heap[lastIdx]] = [heap[lastIdx], heap[1]];
    // remove last leaf
    heap.pop();
    // rearrange heap
    rearrangeHeap(1);
    // return the greatest element
    return greatest;
  }

  this.sort = function() {
    const result = [];
    while(this.size()) {
      result.push(this.remove());
    }
    return result;
  }

  // Auxiliary functions
  function getParent(idx) {
    return Math.floor(idx / 2);
  }

  function swap(i, j) {
    if(i < heap.length && j < heap.length) {
      [heap[i], heap[j]] = [heap[j], heap[i]];
    }
  }

  function rearrangeHeap(idx) {
    // Recursive function that rearranges the heap
    const leftChild = idx * 2;
    const rightChild = leftChild + 1;
    let maxChild = (rightChild < heap.length && heap[rightChild] > heap[leftChild])
                 ? rightChild
                 : leftChild;
    if(maxChild < heap.length && heap[idx] < heap[maxChild]) {
      swap(idx, maxChild);
      rearrangeHeap(maxChild);
    }
  }
}
