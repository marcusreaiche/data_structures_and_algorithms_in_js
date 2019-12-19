function Trie() {

  function Node() {
    this.keys = {};
    this.end = false;
    this.isEnd = () => this.end;
  }

  this.root = new Node();

  this.add = function(input, node=this.root) {
    if(!input) {
      // end of the word
      node.end = true;
      return;
    }
    const c = input.charAt(0);
    if(!node.keys[c]) {
      // add new node to trie
      node.keys[c] = new Node();
    }
    // call recursive function
    this.add(input.slice(1), node.keys[c]);
  }

  this.isWord = function(word, node=this.root) {
    while(word.length > 0) {
      const c = word.charAt(0);
      if(node.keys[c]) {
        word = word.slice(1);
        node = node.keys[c];
      }
      else {
        return false;
      }
    }
    return node.isEnd();
  }

  this.print = function() {
    const words = [];
    function getWords(node, s="") {
      if(node.isEnd()) {
        words.push(s);
      }
      for(c of Object.keys(node.keys)) {
        getWords(node.keys[c], s + c);
      }
    }
    getWords(this.root);
    return words;
  }
}
