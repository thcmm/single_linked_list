'use strict'
/* Åå Ää Öö */
function Node(val, next = null) {
    this.val = val; // data element
    this.next = next; // reference till nästa node|element|val
}

function SinglyLinkedList() {
    this.head = null; // priv till Node: ref till first Node
    // this.head = new Node("head");
    this.tail = null; // priv till Node: ref till sista plats (null)
    this.length = 0; // storlek av listan
}
// can use in pop / set / etc...
SinglyLinkedList.prototype.__getNodeAt = function(index) {
    let returnNode = this.head;
    if (index === 0) {
        return returnNode;
    }
    for (var i = 0; i < index; i++) {
        returnNode = returnNode.next;
    }
    return returnNode;
};

SinglyLinkedList.prototype.push = function(val) {
    //console.log('f:push', val);
    let newNode = new Node(val);

    if (this.length == 0) { // !currentNode listan är tomt
        // console.log(`Listan är tomt: this.length =  ${this.length}`);
        this.head = newNode;
        this.tail = newNode;
    }
    else {
    this.tail.next = newNode;
    this.tail = newNode;
    }
    this.length++;
    return this;
};

SinglyLinkedList.prototype.clear = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

// POP
SinglyLinkedList.prototype.pop = function() {
  if (this.length != 0) {
    let popNodeValue = this.tail.val;
    //console.log(`tail.val = ${popNodeValue}`);
      if (this.length == 1) {
          this.head = null;
          this.tail = null;
      } else {
          let current = this.head;
          while (current.next !== this.tail){
              //console.dir(current);
              current = current.next;
          }
          current.next = null;
          this.tail = current;
      }
      this.length--;
      return popNodeValue;
  } else {
    // console.log(`lenght = ${this.length}`);
    return null; // listan tomt
  }
};


SinglyLinkedList.prototype.unshift = function(val) {};

SinglyLinkedList.prototype.shift = function() {
  var message = {failure: `index out of range`};
  if (this.length !=0){
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
  } else {
    throw new Error(message.failure);
  }
  return this.enum();
};


SinglyLinkedList.prototype.get = function(index) {
  var currentNode = this.head,
      length = this.length,
      cnt = 0,
      message = {
          failure: 'Bzzz: non-existent node in this list.'
      };

  // 1st kondition ovalid index
  if (length == 0 || index < 0 || index > length) {
      throw new Error(message.failure);
  }

  // 2nd kondition valid index
  while (cnt < index) {
      currentNode = currentNode.next;
      cnt++;
  }
  return currentNode.val;
};

SinglyLinkedList.prototype.set = function(index, val) {
  var message = {failure: 'Bzzzz: index out of range'};
  if (index >= 0 && index < this.length) {
  var tmp = this.__getNodeAt(index);
  tmp.val = val;
  return tmp;
} else {
  throw new Error(message.failure);
}
  return undefined;
};


SinglyLinkedList.prototype.remove = function(index) {

};

SinglyLinkedList.prototype.reverse = function() {};

SinglyLinkedList.prototype.enum = function() {
    var currentNode = this.head;
    var arr = [];
    while (currentNode != null) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr;
};

SinglyLinkedList.prototype.menu = function() {
  console.log(`----------------------- MENU -----------------------`);
  console.log(`__getNodeAt(index) : return Node at index`);
  console.log(`push(val)          : return entire node object`);
  console.log(`clear()            : clear linked list`);
  console.log(`pop()              : return popped value`);
  console.log(`get(index)         : return value at node index`);
  console.log(`set(index, val)    : return updated node`);
  console.log(`shift()            : removes first`);
  console.log(`----------------------------------------------------`);
};


var ll = new SinglyLinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.menu();

// ll.push(2);
// ll.push(7);
// ll.push(3);
// ll.push(1);
