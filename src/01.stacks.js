class Stack {
  constructor() {
    this._storage = {};
    this._count = 0;
  }

  size() {
    return this._count;
  }

  push(value) {
    this._storage[this._count] = value;
    this._count++;
  }

  pop() {
    if (this._count === 0) {
      return undefined;
    }

    this._count--;
    const value = this._storage[this._count];
    delete this._storage[this._count];
    return value;
  }

  peek() {
    if (this._count === 0) {
      return undefined;
    }
    return this._storage[this._count - 1];
  }
}

// Check is palindrome
function checkIsPalindrome(word) {
  const s = new Stack();
  for(let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rword = "";
  for(let i = 0; i < word.length; i++) {
    rword += s.pop();
  }
  return rword === word;
}
