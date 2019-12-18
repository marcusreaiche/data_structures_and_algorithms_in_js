class HashTable {
  constructor(storageLimit=4) {
    this._storage = [];
    this._storageLimit = storageLimit;
  }

  hash(word, max=this._storageLimit) {
    return word.split("")
        .reduce((sum, c) => sum + c.charCodeAt(0), 0) % max;
  }

  add(key, value) {
    const idx = this.hash(key);
    if(!this._storage[idx]) {
      // Position idx is empty
      this._storage[idx] = [[key, value]];
    }
    else {
      // Check if key was already inserted
      const search = this._storage[idx].find(item => item[0] === key);
      if(search) {
        // modify value
        search[1] = value;
      }
      else {
        // insert key, value pair
        this._storage[idx].push([key, value]);
      }
    }
  }

  lookup(key) {
    const idx = this.hash(key);
    if (!this._storage[idx]) {
      return;
    }
    for(let i = 0; i < this._storage[idx].length; i++) {
      if(this._storage[idx][i][0] === key) {
        return this._storage[idx][i][1];
      }
    }
    return;
  }

  remove(key) {
    const idx = this.hash(key);
    if (!this._storage[idx]) {
      return;
    }
    for(let i = 0; i < this._storage[idx].length; i++) {
      if(this._storage[idx][i][0] === key) {
        this._storage[idx].splice(i, 1);
        return true;
      }
    }
    return;
  }
}
