class mySet {
  constructor() {
    this._collection = [];
  }

  has(e) {
    return this._collection.indexOf(e) >= 0;
  }

  values() {
    return [...this._collection];
  }

  add(e) {
    if (!this.has(e)) {
      this._collection.push(e);
    }
    // Return this so it is possible to chain operations
    return this;
  }

  remove(e) {
    const idx = this._collection.indexOf(e);
    if (idx >= 0) {
      this._collection.splice(idx, 1)
    }
    return this;
  }

  size() {
    return this._collection.length;
  }

  union(otherSet) {
    const unionSet = new mySet();
    this.values().forEach(e => {
      unionSet.add(e);
    });
    otherSet.values().forEach(e => {
      unionSet.add(e);
    });
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new mySet();
    this.values().forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new mySet();
    this.values().forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  isSubset(otherSet) {
    return this.values().every(e => otherSet.has(e));
  }

  symmetricDifference(otherSet) {
    const thisMinusOther = this.difference(otherSet);
    const otherMinusThis = otherSet.difference(this);
    return thisMinusOther.union(otherMinusThis);
  }
}
