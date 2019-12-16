class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const value = this.storage[this.count];
    delete this.storage[this.count];
    return value;
  }

  peek() {
    if (this.count === 0) {
      return undefined;
    }
    return this.storage[this.count - 1];
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
