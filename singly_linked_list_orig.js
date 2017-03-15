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
      // currentNode = this.head;

  //console.dir(newNode);
  if (this.length == 0) { // !currentNode listan är tomt
      // console.log(`Listan är tomt: this.length =  ${this.length}`);
      this.head = newNode;
      this.tail = newNode;
      //this.length++;
      //console.dir(this.head);
      //return this; //newNode;
  }
  // det finnas redan något i listan, skicka nytt till listan
  // while (currentNode.next) {
  //     //console.log(`Node chain:`);
  //     currentNode = currentNode.next;
  //     console.dir(currentNode);
  // }
  //currentNode.next = newNode;
  // console.dir(this);
  else {
  this.tail.next = newNode;
  this.tail = newNode;
  }
  this.length++;
  return this; //newNode;
  // OLD orig
    //console.log('f:push');
    // let newNode = new Node(val),
    // currentNode = this.head;
    //
    // //console.dir(newNode);
    // if (!currentNode) { // listan är tomt skapa först node
    //    //console.log(`Listan är tomt: this.length =  ${this.length}`);
    //    this.head = newNode;
    //    this.tail = newNode;
    //    this.length++;
    //    return newNode;
    // }
    // // det finnas redan något i listan, skicka nytt till listan
    // while(currentNode.next) {
    //    //console.log(`Node chain:`);
    //    currentNode = currentNode.next;
    //    //console.dir(currentNode);
    // }
    // currentNode.next = newNode;
    // this.tail = newNode;
    // this.length++;
    // return newNode;
};

SinglyLinkedList.prototype.clear = function() {};

SinglyLinkedList.prototype.pop = function() {
    console.log(`f:pop()`);

    if (!this.tail) { // listan är tomt skapa först node
        //console.log(`Listan är tomt: this.length =  ${this.length}`);
        return null;
    }
    var currentNode = this.head,
        count = 0,
        message = {
            failure: 'Failure: non-existent node in this list.'
        },
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    //console.log(`length: ${this.length}`);

    // 2nd use-case: the first node is removed
    if (this.length === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this.length--;

        return deletedNode;
    }

    // 3rd use-case: any other node is removed
    while (count < this.length) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.length--;

    return deletedNode;
};

SinglyLinkedList.prototype.unshift = function(val) {};

SinglyLinkedList.prototype.shift = function() {};

SinglyLinkedList.prototype.get = function(index) {
    //console.log(`f:get()`);
    //console.log(`index = ${index}`);

    var currentNode = this.head,
    length = this.length,
    count = 1,
    message = {failure: 'Failure: non-existent node in this list.'};

 // 1st use-case: an invalid index
 if (length === 0 || index < 1 || index > length) {
    throw new Error(message.failure);
 }

 // 2nd use-case: a valid position
 while (count < index) {
    currentNode = currentNode.next;
    count++;
 }
 return currentNode;
};

SinglyLinkedList.prototype.set = function(index, val) {};

SinglyLinkedList.prototype.remove = function(index) {};

SinglyLinkedList.prototype.reverse = function() {};

module.exports = SinglyLinkedList;
