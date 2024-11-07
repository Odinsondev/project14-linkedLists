//Indexed linked list

//Synthax:
//create list -   const listName = createLinkedList();
//edit list -   listName.methodName();
//Methods: append(data), prepend(data), size, logHead, logTail, at(index), pop, contains(data),
//find(data), listToString, insertAt(data, index), removeAt(index)
//detailed explanations before each function

export { createLinkedList };

//functions

function createNode(data) {
  const node = {};
  node.value = data;
  node.nextNode = null;
  node.index = null;

  return node;
}

function createLinkedList() {
  const list = {};
  list.head = null;
  list.tail = null;

  //Adds a new node containing 'data' to the end of the list
  list.append = function (data) {
    if (list.head === null) {
      list.head = createNode(data); //if the linked list is empty, adds new node to head
      list.tail = list.head; //tail and head point to the same node
    } else {
      if (list.head.nextNode === null) {
        list.head.nextNode = createNode(data); //if head.nextNode empty, adds new node
        list.tail = list.head.nextNode; //updates the tail
      } else {
        list.tail.nextNode = createNode(data); //adds new node after the current tail
        list.tail = list.tail.nextNode; //updates the tail
      }
    }
    list.updateIndex();
  };

  //Adds a new node containing 'data' to the start of the list
  list.prepend = function (data) {
    if (list.head === null) {
      list.head = createNode(data); //if the linked list is empty, adds new node to head
      list.tail = list.head; //tail and head point to the same node
    } else {
      let newNode = createNode(data);
      newNode.nextNode = list.head;
      list.head = newNode; //updates the head
    }
    list.updateIndex();
  };

  //Returns the total number of nodes in the list
  list.size = function () {
    let currentNode = list.head; //starting point for the while loop
    let linkedListLength = 1;

    if (list.head === null) {
      linkedListLength = 0;
    } else {
      while (currentNode.nextNode) {
        //while currentNode.nextNode is not null
        currentNode = currentNode.nextNode;
        linkedListLength++;
      }
    }

    return linkedListLength;
  };

  //Returns the first node in the list
  list.logHead = function () {
    return list.head;
  };

  //Returns the last node in the list
  list.logTail = function () {
    return list.tail;
  };

  //Returns the node at the given index
  list.at = function (index) {
    let currentNode = list.head; //starting point for the for loop

    while (currentNode.index !== index) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  };

  //Removes the last element from the list
  list.pop = function () {
    let newTailIndex = list.size() - 1; //index for the new tail

    if (newTailIndex > 0) {
      //if the linked list has more than 1 nodes
      let newTail = list.at(newTailIndex);
      list.tail = newTail;
      list.tail.nextNode = null;
    } else if (newTailIndex === 0 || newTailIndex === -1) {
      //if the linked list only has 1 node or 0 nodes
      list.head = null;
      list.tail = null;
    }
  };

  //Returns true if the passed in value is in the list and otherwise returns false
  list.contains = function (data) {
    if (list.head === null) {
      return false;
    } else {
      let currentNode = list.head; //starting point for the for loop
      let linkedListLength = list.size();

      for (let i = 0; i < linkedListLength; i++) {
        if (currentNode.value === data) {
          return true;
        } else {
          currentNode = currentNode.nextNode;
        }
      }

      return false; //if loop done with no matches
    }
  };

  //Returns the index of the node containing 'data', or null if not found
  list.find = function (data) {
    if (list.head === null) {
      return null;
    } else {
      let currentNode = list.head; //starting point for the for loop
      let linkedListLength = list.size();

      for (let i = 0; i < linkedListLength; i++) {
        if (currentNode.value === data) {
          return currentNode.index;
        } else {
          currentNode = currentNode.nextNode;
        }
      }

      return null; //if loop done with no matches
    }
  };

  //Represents your LinkedList objects as strings
  list.listToString = function () {
    if (list.head === null) {
      return null;
    } else {
      let string = '';
      let currentNode = list.head; //starting point for the for loop
      let linkedListLength = list.size();

      for (let i = 0; i < linkedListLength; i++) {
        string = string + '( ' + currentNode.value.toString() + ' )' + ' -> ';
        currentNode = currentNode.nextNode;
      }

      string = string + 'null';
      return string;
    }
  };

  //Inserts a new node with the provided value at the given index
  list.insertAt = function (data, index) {
    if (list.head === null) {
      console.log('Empty linked list');
      return null;
    } else if (index === 1) {
      list.prepend(data);
      return;
    } else {
      let currentNode = list.head; //starting point for the for loop
      let linkedListLength = list.size();

      //finding the requested index for the new node
      for (let i = 0; i < linkedListLength; i++) {
        if (currentNode.index === index) {
          let newNode = createNode(data); //creates new node
          newNode.nextNode = currentNode; //links the end of the list to the new node

          let previousNodeIndex = index - 1;
          currentNode = list.head; //reusing the currentNode variable
          for (let j = 0; j < linkedListLength; j++) {
            if (currentNode.index === previousNodeIndex) {
              currentNode.nextNode = newNode; //links the start of the list to newNode
              list.updateIndex();
              return;
            } else {
              currentNode = currentNode.nextNode;
            }
          }
        } else {
          currentNode = currentNode.nextNode;
        }
      }

      console.log('Index not found');
      return null; //if loop done with no matches
    }
  };

  //Removes the node at the given index
  list.removeAt = function (index) {
    if (list.head === null) {
      console.log('Empty linked list');
      return null;
      //if removing the only node
    } else if (index === 1 && index === list.size()) {
      list.pop();
      //if removing the first node
    } else if (index === 1) {
      list.head = list.head.nextNode;
      list.updateIndex();
      //if removing the last node
    } else if (index === list.size()) {
      list.pop();
    } else {
      let currentNode = list.head; //starting point for the for loop
      let linkedListLength = list.size();

      //finding the requested index for the node in front of the removed node
      for (let i = 0; i < linkedListLength; i++) {
        if (currentNode.index === index - 1) {
          currentNode.nextNode = currentNode.nextNode.nextNode; //jumps over the removed node
          list.updateIndex();
          return;
        } else {
          currentNode = currentNode.nextNode;
        }
      }

      console.log('Index not found');
      return null; //if loop done with no matches
    }
  };

  list.updateIndex = function () {
    let currentNode = list.head;
    let linkedListLength = list.size();

    for (let i = 1; i <= linkedListLength; i++) {
      currentNode.index = i;
      currentNode = currentNode.nextNode;
    }
  };

  return list;
}
