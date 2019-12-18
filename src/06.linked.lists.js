function LinkedList() {
  head = null;
  length = 0;

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  this.head = () => head;
  this.size = () => length;
  this.isEmpty = () => length === 0;

  this.add = function(element) {
    const node = new Node(element);
    if(!head) {
      head = node;
      length++;
      return;
    }
    let currentNode = head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    length++;
  }

  this.remove = function(element) {
    // empty linked list
    if(!head) return false;
    // remove head
    if(head.data === element) {
      head = head.next;
      length--;
      return true;
    }
    // keep track of current and previous nodes
    let currentNode = head;
    let previousNode;
    // search node matching element
    while(currentNode && currentNode.data !== element ) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    // two possibilities: currentNode.data === element or currentNode === null
    if (currentNode) {
      previousNode.next = currentNode.next;
      length--;
      return true;
    }
    else {
      return false;
    }
  }

  this.indexOf = function(element) {
    let index = 0;
    let currentNode = head;
    // search element
    while(currentNode && currentNode.data !== element) {
      currentNode = currentNode.next;
      index++;
    }
    if(currentNode) return index; // element found
    return -1; // element not found
  }

  this.addAt = function(idx, element) {
    if(idx > length || idx < 0) return false;
    const node = new Node(element);
    let currentNode = head;
    let previousNode;
    let count = 0;
    while(count < idx) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    node.next = currentNode;
    if(previousNode) {
      previousNode.next = node;
    }
    else {
      head = node;
    }
    length++;
    return true;
  }

}

const cities = new LinkedList();
cities.add("Rio de Janeiro");
cities.add("São Paulo");
cities.add("Toronto");
cities.add("Calgary");
cities.add("Vancouver");
