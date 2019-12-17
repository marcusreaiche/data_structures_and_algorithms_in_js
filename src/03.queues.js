class Queue {
  constructor() {
    this._collection = [];
  }

  printCollection() {
    console.log(this._collection);
  }

  enqueue(element) {
    this._collection.push(element);
    // Return this allow us to chain enqueues
    return this;
  }

  dequeue() {
    return this._collection.shift();
  }

  front() {
    return this._collection[0];
  }

  size() {
    return this._collection.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

class PriorityQueue extends Queue {

  enqueue(element) {
    let added = false;
    const L = this.size();
    for(let i = 0; i < L; i++) {
      if(element[1] > this._collection[i][1]) {
        this._collection.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if(!added) {
      this._collection.push(element);
    }
    return this;
  }

  dequeue() {
    const value = this._collection.shift();
    return value ? value[0] : undefined;
  }
}
