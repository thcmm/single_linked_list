'use strict'

function Node(val, next = null) {
    this.val = val; // data element
    this.next = next; // reference till next node|element|val
}

function SinglyLinkedList() {
    this.head = null; // priv till Node: ref till first Node
    this.tail = null; // priv till Node: ref till sista plats (null)
    this.length = 0; // storlek av listan
}
// getNodeAt
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

// PUSH
SinglyLinkedList.prototype.push = function(val) {
  //console.log('f:push', val);
  let newNode = new Node(val);

  if (!this.head) { // !currentNode listan är tomt
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
// CLEAR
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
      if (this.length == 1) { // bara ett node alt ska vara null
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

// adds value to the head of list, updates length, if list emply updates tail
	SinglyLinkedList.prototype.unshift = function(val) {
		var newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return this.head.val;
		}

		if (this.length > 0) {
			var oldHead = this.head;
			var oldNext = this.head.next;
			this.head = newNode;
			this.head.next = oldHead;
			oldHead.next = oldNext;
			this.length++;
			return oldHead;
		}
	};


// removes values from front of list, decrements length
SinglyLinkedList.prototype.shift = function() {
	if(!this.head) {
		return null;
	}
	var val = this.head.val;
	if (this.head.next) {
		this.head = this.head.next;
	}
	this.length--;
	return val;
};

SinglyLinkedList.prototype.get = function(index) {
  var currentNode = this.head,
      length = this.length,
      cnt = 0,
      message = {
          failure: 'Bzzz: non-existent node in this list.'
      };

  // 1st kondition ovalid index
  if (length === 0 || index < 0 || index >= length) {
    return undefined;
  }

  // 2nd kondition valid index
  while (cnt < index) {
      currentNode = currentNode.next;
      cnt++;
  }
  return currentNode.val;
};

// SET
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



// REMOVE
SinglyLinkedList.prototype.remove = function(index) {
  var removeNode = this.__getNodeAt(index);
  var prevNode = this.__getNodeAt(index-1);

  if (this.length == 1) {
    this.head = null;
    this.tail = null;
  }
  else {
    let nextNode = this.__getNodeAt(index+1);
    prevNode.next = nextNode;
  }
  this.length--;
  return removeNode.val;
};


SinglyLinkedList.prototype.reverse = function() {};

SinglyLinkedList.prototype.autopop = function() {
    this.push(10).push(7).push(2).push(5);
}

SinglyLinkedList.prototype.enum = function() {
    var currentNode = this.head;
    var arr = [];
    while (currentNode != null) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr;
};

module.exports = SinglyLinkedList;


/*
 SinglyLinkedList.prototype.remove = function(index) {
 var removeNode = this.__getNodeAt(index);
 var prevNode = this.__getNodeAt(index-1);

 if (this.length == 1) {
 this.head = null;
 this.tail = null;
 }
 else {
 let nextNode = this.__getNodeAt(index+1);
 prevNode.next = nextNode;
 }
 this.length--;
 return removeNode.val;
 };
 */